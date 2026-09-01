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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {


        let mergedList = new ListNode()
        let cursor = mergedList

        while(list1 && list2){

            if( list1?.val >= list2?.val){
                cursor.next = list2 
                list2 = list2.next
            }else {
                cursor.next = list1
                list1 = list1?.next
            }
            cursor = cursor.next


            // console.log("mergedList", mergedList)
        }
        cursor.next = list1 || list2
        console.log("mergedList2222", mergedList.next)
        return mergedList.next
    }
}
