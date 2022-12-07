// Given the head of a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node.

const middleNode = (head) => {

    let fast = head;
    let slow = head

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

// fast pointer goes 2 at a time, so thats why we validate fast and fast.next is not null.
// than we write that the slow only goes for the next, and the fast will go to 2 steps like mentioned.
// and then we return the slowest because we know that he ends being the latest since he is the slowest.