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
        
        let current = head
        const nodes = []
        while(current){
            nodes.push(current)
            current = current.next  
        }

        const removeIndex = nodes.length - n

        const dummy = new ListNode(-1);
        let cur  = dummy 
        for(let i = 0 ; i < nodes.length; i ++){
            if(i === removeIndex){
                continue;
            }
            cur.next = nodes[i]
            cur = cur.next
        }
        cur.next = null

        return dummy.next

    }removeIndex
}
