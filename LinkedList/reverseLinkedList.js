// Given the head of a singly linked list, 
// reverse the list, and return the reversed list.
// explanation on Algoexport

var reverseList = function(head) {
    let previousNode = null;
    let currentNode = head;
    while (currentNode !== null) {
        const nextNode = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;
    }
    return previousNode;
};