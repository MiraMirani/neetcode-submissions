/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let dummy = head
        let cur = dummy
        const seen = new Set()

        while(cur) {
            if(!seen.has(cur)){
                seen.add(cur)
            }else{
                return true
            }

            cur = cur.next
        }

        return false

        
            }
}
