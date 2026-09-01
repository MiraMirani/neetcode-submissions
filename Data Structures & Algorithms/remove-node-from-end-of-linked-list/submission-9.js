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

        let cur = head
        let nodes = []

        while(cur){
            nodes.push(cur)
            cur = cur.next
        }

console.log("nodes.length - n - 1", nodes.length - n - 1)
        if(nodes.length - n  === 0){
            console.log("33333")
            return head.next
        }

        nodes[nodes.length - n - 1].next = nodes[nodes.length -n]?.next || null

        console.log(head)
        return head


    }
}
