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
     * @return {ListNode}
     */
    reverseList(head) {



       let dummy = null; 
       console.log(dummy)
       let current = head

       while(current){
            const temp = current.next
            current.next = dummy
            dummy = current

            current = temp
       }

       return dummy
    }
}
