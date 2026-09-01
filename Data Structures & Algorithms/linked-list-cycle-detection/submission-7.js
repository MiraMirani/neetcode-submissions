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
        let seen = new Set()

        while(dummy){
            if(!seen.has(dummy)){
                seen.add(dummy)
            }else {
                return true
            }

            dummy = dummy.next
        }
        return false

    }
}
