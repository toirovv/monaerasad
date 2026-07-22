import { useSyncExternalStore } from 'react'

let _items = []
let _version = 0
const _listeners = new Set()
const _snapshots = new Map()
let _totalsSnapshot = { v: 0, totalItems: 0, totalPrice: 0, totalPriceUZS: 0 }

function emitChange() {
  _version++
  for (const listener of _listeners) listener()
}

function subscribe(listener) {
  _listeners.add(listener)
  return () => _listeners.delete(listener)
}

function getSnapshot() {
  return _items
}

function getServerSnapshot() {
  return []
}

function loadInitial() {
  try {
    const saved = localStorage.getItem('monaer_cart')
    _items = saved ? JSON.parse(saved) : []
  } catch {
    _items = []
  }
  _updateTotals()
}
loadInitial()

function _updateTotals() {
  _totalsSnapshot = {
    v: _version,
    totalItems: _items.reduce((sum, item) => sum + item.qty, 0),
    totalPrice: _items.reduce((sum, item) => sum + item.price * item.qty, 0),
    totalPriceUZS: _items.reduce((sum, item) => sum + (item.priceUZS || 0) * item.qty, 0),
  }
}

function setItems(next) {
  _items = next
  localStorage.setItem('monaer_cart', JSON.stringify(next))
  _snapshots.clear()
  _updateTotals()
  emitChange()
}

export const addItem = (product) => {
  const exists = _items.find((item) => item.id === product.id)
  let next
  if (exists) {
    next = _items.map((item) =>
      item.id === product.id ? { ...item, qty: item.qty + 1 } : item
    )
  } else {
    next = [..._items, { ...product, qty: 1 }]
  }
  setItems(next)
}

export const removeItem = (id) => {
  const next = _items.filter((item) => item.id !== id)
  setItems(next)
}

export const updateQty = (id, qty) => {
  if (qty < 1) {
    removeItem(id)
    return
  }
  const next = _items.map((item) =>
    item.id === id ? { ...item, qty } : item
  )
  setItems(next)
}

export const clearCart = () => {
  _snapshots.clear()
  setItems([])
  localStorage.removeItem('monaer_cart')
  emitChange()
}

function getItemSnapshot(id) {
  const found = _items.find((item) => item.id === id)
  if (!found) return undefined
  const cached = _snapshots.get(id)
  if (cached && cached.item === found) return cached
  const snap = { v: _version, item: found }
  _snapshots.set(id, snap)
  return snap
}

function getTotalsSnapshot() {
  return _totalsSnapshot
}

export function useCartItems() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

export function useCartItem(id) {
  const snap = useSyncExternalStore(subscribe, () => getItemSnapshot(id), () => undefined)
  return snap?.item
}

export function useCartTotals() {
  return useSyncExternalStore(subscribe, getTotalsSnapshot, () => _totalsSnapshot)
}

export function useCartActions() {
  return { addItem, removeItem, updateQty, clearCart }
}
