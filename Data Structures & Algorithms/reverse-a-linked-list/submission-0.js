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


        reverseList(head) {

        if(!head){
            return null
        }

        let prev = null
        let cur = head

        while (typeof cur?.val === "number"){
            console.log(cur, "currr")
            let nextNode = cur.next
            cur.next = prev
            prev = cur
            cur = nextNode
        }
        
        return prev
    }
}
