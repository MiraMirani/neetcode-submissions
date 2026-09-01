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

        let cursor = head
        let nodes = []

        while(cursor){
            nodes.push(cursor)
            cursor = cursor.next
        }
        const k = nodes.length
        console.log("kkk", k)
        let c = 0
        for (let i = 0; i < Math.floor(k/2) ; i ++){
            nodes[i].next = nodes[k-i-1]
            nodes[k-1-i].next = nodes[i+1]
            c++
        }
            // if(k%2!== 0){
            //     nodes[i].next = nodes[k-i-1]
            // }

        console.log("ccc", c,Math.ceil(k/2))
        nodes[c].next =null


        console.log("noodess", nodes)
        console.log("head", head)
    }
}
