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
     * @return {void}
     */
    reorderList(head) {

        if(!head) return 

        let cur = head
        let nodes = []

        while(cur){
            nodes.push(cur)
            cur = cur.next
        }
        // console.log("curr", array)

        let i = 0
        let j = nodes.length - 1 
        while(j > i){
            nodes[i].next = nodes[j]
            i++
            if(i >= j) break
            nodes[j].next = nodes[i]
            j--
        }

        nodes[i].next =null
        console.log("duuu", head)
        return head

    }
}
