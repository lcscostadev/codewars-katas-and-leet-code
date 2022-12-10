// You are given the heads of two sorted linked lists list1 and list2.Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists. Return the head of the merged linked list.

// Solving -- to solve this, we need to have a third list (a dummy list) that will contain the two lists sorted's. first we validate if they're null, then we validate the smallest number between lists. the smallest number on the lists goes to the tail of the new list. making the list in ascending order

// 1° solution
const mergeTwoLists = (l1, l2) => {
    let dummy = new ListNode();
    let tail = dummy;

    if (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }
    if (l1 !== null) {
        tail.next = l1;
    } else {
        tail.next = l2;
    }

    return dummy.next;
}
// 2° solution - using recursion

// To solve this problem, we can use recursion, calling it until one of the sheets is null, and while it is not null, we do an equality check, if list1 is less than or equal to list2, we call recursion with list1.next = mergeTwoLists (list1.next, list2), else if the value is greater than list2.next = mergeTwoLists(list1, list2.next). If one of the sheets is null, we simply return the opposite list (we don't care if it's null or not). Thus, when the recursion ends, the stack will begin to collapse in reverse order, which will allow us to get a new merged sorted list.

const mergeTwoLists2 = (l1, l2) => {
    if (!l1) {
        return l2;
    } else if (!l2) {
        return l1;
    } else if (l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}