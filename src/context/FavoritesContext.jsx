import { useSyncExternalStore } from 'react'

let _ids = []
let _version = 0
const _listeners = new Set()
let _countSnapshot = { v: 0, count: 0 }

function emitChange() {
  _version++
  for (const listener of _listeners) listener()
}

function subscribe(listener) {
  _listeners.add(listener)
  return () => _listeners.delete(listener)
}

function getSnapshot() {
  return _ids
}

function getServerSnapshot() {
  return []
}

function loadInitial() {
  try {
    const saved = localStorage.getItem('monaer_favorites')
    _ids = saved ? JSON.parse(saved) : []
  } catch {
    _ids = []
  }
  _updateCount()
}
loadInitial()

function _updateCount() {
  _countSnapshot = { v: _version, count: _ids.length }
}

function setIds(next) {
  _ids = next
  localStorage.setItem('monaer_favorites', JSON.stringify(next))
  _updateCount()
  emitChange()
}

export const toggleFavorite = (id) => {
  const exists = _ids.includes(id)
  const next = exists ? _ids.filter((i) => i !== id) : [..._ids, id]
  setIds(next)
}

export const isFavorite = (id) => {
  return _ids.includes(id)
}

export const clearFavorites = () => {
  setIds([])
  localStorage.removeItem('monaer_favorites')
  emitChange()
}

function getCountSnapshot() {
  return _countSnapshot
}

export function useFavoriteIds() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

export function useIsFavorite(id) {
  return useSyncExternalStore(
    subscribe,
    () => _ids.includes(id),
    () => false
  )
}

export function useFavoritesCount() {
  return useSyncExternalStore(subscribe, getCountSnapshot, () => _countSnapshot)
}

export function useFavoritesActions() {
  return { toggleFavorite, clearFavorites }
}
