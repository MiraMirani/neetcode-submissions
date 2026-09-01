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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        const dummy = []
        let cur = head

        while(cur){
            dummy.push(cur)
            cur = cur.next
        }
        const removeIndex = dummy.length - n
        console.log(removeIndex, "removeIndex")
        if(removeIndex === 0){
            return head.next
        }
        dummy[removeIndex-1].next = dummy[removeIndex].next

        return head


    }
}
