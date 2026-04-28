'use client';
import { useEffect } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { addRecentlyViewed } from '@/store/slices/historySlice';
export function TrackView({ title, href, type }: { title: string; href: string; type: string }) {
  const dispatch = useAppDispatch();
  useEffect(() => { dispatch(addRecentlyViewed({ title, href, type })); }, [dispatch, title, href, type]);
  return null;
}
