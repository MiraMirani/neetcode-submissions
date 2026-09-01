// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {

        if(!head) return null

        console.log("head, ", head)
        const map = new Map()
        let cur = head

        // Creating copied nodes
        while(cur){
            map.set(cur, new Node(cur.val))
            cur = cur.next
        }

        // Linking copied nodes together
        cur = head
        while(cur){
            const copy = map.get(cur)
            // copy has each node+value without next and random
            // we should add next and random to each node here
      
            // copy.next = cur.next || null
            // copy.random = cur.random || null
            copy.next = map.get(cur.next) || null
            copy.random = map.get(cur.random) || null
            cur = cur.next
        }

        return map.get(head)

    }
}
