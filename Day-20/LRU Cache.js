// https://leetcode.com/problems/lru-cache/submissions/2058388867/
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.cache = new Map();

    this.left = { prev: null, next: null };  // LRU
    this.right = { prev: null, next: null }; // MRU

    this.left.next = this.right;
    this.right.prev = this.left;
};

// Remove node from linked list
LRUCache.prototype.remove = function (node) {
    let prev = node.prev;
    let next = node.next;

    prev.next = next;
    next.prev = prev;
};

// Insert node at MRU position
LRUCache.prototype.insert = function (node) {
    let prev = this.right.prev;
    let next = this.right;

    prev.next = node;
    next.prev = node;

    node.prev = prev;
    node.next = next;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.cache.has(key)) {
        return -1;
    }

    let node = this.cache.get(key);

    this.remove(node);
    this.insert(node);

    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.cache.has(key)) {
        this.remove(this.cache.get(key));
    }

    let node = {
        key: key,
        value: value,
        prev: null,
        next: null
    };

    this.cache.set(key, node);
    this.insert(node);

    if (this.cache.size > this.capacity) {
        let lru = this.left.next;

        this.remove(lru);
        this.cache.delete(lru.key);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */