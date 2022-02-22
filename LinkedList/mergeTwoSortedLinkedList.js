// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing 
// together the nodes of the first two lists.

// Return the head of the merged linked list.

// explanaton
// https://www.educative.io/m/merge-two-sorted-linked-lists
var mergeTwoLists = function(list1, list2) {
    if(!list1) {
        return list2;
    } else if (!list2) {
        return list1;
    }
    let mergedList = 0;
    if (list1.val <= list2.val) {
        mergedList = list1;
        list1 = list1.next;
    } else {
        mergedList = list2;
        list2 = list2.next;
    }
    
    let mergedTail = mergedList;
    while (list1 && list2) {
        let temp = null;
        if(list1.val <= list2.val) {
            temp = list1;
            list1 = list1.next;
        } else {
            temp = list2;
            list2 = list2.next;
        }
        mergedTail.next = temp;
        mergedTail = temp;
    }
    
    if(list1) {
        mergedTail.next = list1;
    } else if(list2) {
        mergedTail.next = list2;
    }
    return mergedList;
};
