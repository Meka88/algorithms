// Given the head of a linked list, remove the nth node from 
// the end of the list and return its head.
// explanation 
// https://dev.to/seanpgallivan/solution-remove-nth-node-from-end-of-list-4njl
var removeNthFromEnd = function(head, n) {
    // let fast = head;
    // let slow = head;
    // for (let i = 0; i < n; i++) fast = fast.next;
    // if(!fast) return head;
    // while(fast.next) fast = fast.next, slow = slow.next
    // slow.next = slow.next.next;
    // return head; 
    let count = 0
    let runner = head
    while(runner){
        count++
        runner = runner.next
    }
    count -= n
    // if count === 0 return next
    if(!count)
        return head.next  
    
    let prv = null
    runner = head
    while(count){
        prv = runner
        runner = runner.next
        count--
    }

    prv.next = runner.next
    return head
};