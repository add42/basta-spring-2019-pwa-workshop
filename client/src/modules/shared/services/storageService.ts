import { Injectable } from '@angular/core';

const STORAGE_KEY = 'PWA_Demo: ';

const _localStorage = global
    ? ({ setItem(key: string, value: any) {}, getItem(key: string) {}, removeItem(key: string) {}, clear() {} } as any)
    : localStorage;

@Injectable()
export class StorageService {
    get(key: string): any {
        return _localStorage.getItem(`${STORAGE_KEY}${key}`);
    }

    set(key: string, value: any) {
        _localStorage.setItem(`${STORAGE_KEY}${key}`, value);
    }

    remove(key: string) {
        _localStorage.removeItem(`${STORAGE_KEY}${key}`);
    }

    clear() {
        _localStorage.clear();
    }
}
