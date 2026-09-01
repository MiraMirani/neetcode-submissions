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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode(-1)
        let cur = dummy
        let extra = 0
        while( l1 || l2){

            let temp = (l1?.val || 0) + (l2?.val || 0) + extra
            console.log(temp, "temp")
            if(temp/10 >=1){
                
                // cur.next = new ListNode(temp%10)
                // cur = cur.next
                // // console.log(temp%10)
                extra = 1
            }else{ 
                extra = 0
            }
            console.log(temp)

            cur.next = new ListNode(temp%10)

            cur = cur.next
            l1 = l1?.next
            l2 = l2?.next

        }

        if(extra) cur.next = new ListNode(1)
        console.log(dummy, "dummy")

        return dummy.next

    }
}
