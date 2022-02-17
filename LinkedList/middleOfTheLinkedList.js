// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.
// explanation
// https://dev.to/alisabaj/finding-the-middle-of-a-linked-list-36kp

var middleNode = function(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

