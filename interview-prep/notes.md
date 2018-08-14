
# Interview Prep

The point of this file (and repo) is to help me keep track of what I'm studying
while prepping for software engineering interviews.

## About Me Questions

#### Why I left past companies

**Why did I leave Automattic?**

Automattic was perfect in a lot of ways. I got to work on interesting problems, with interesting people,
travel all over the world, and participate in the larger open source community.

The driving reason for why I left is the company's fully distributed nature.
After working remote for a couple of years, I just started missing people.
Going to coworking offices isn't really my cup of tea
I have a feeling that maybe at a different stage of life I'd enjoy it more, but for right now.

There were a few other issues that weren't as much of dealbreakers that
contributed to my decision to quit.  One of the big ones is that I
believed the organizational flatness and individual agency 
at the company contributed to a lack of focus on long term, difficult projects.

**Why did I leave Amazon?**

Amazon was a whirlwind to work for.  I actually really enjoyed the work there.
I felt like we were truly on the cutting edge and that the company (as well as my team)
was innovating in many respects. I was witness to some major successes 
and also some specatacular failures.

There were a couple reasons I left:

1.  The biggest reason was definitely that I wanted to move back to the east coast &#x2013; specifically near NYC.
2.  Inside Amazon's walls can feel like a cult.  After two internships and then 1.5 years 
    full time, I felt strong need to see what else was out there.

#### **Projects**

**bucklefrog**

**dserve**

**conversation caterpillar**



#### Technical Material

Remember that feeling when you first learned how to drive a car? You are so focused on nailing all the basics of driving that you don't have any headspace left over for even maintaining a conversation.  As you really get comfortable with it, all those things you needed to focus so hard on in the beginning become second nature -- you can have conversations, mess with music controls, maybe even sneak a text message at a red light.

I think technical interviewing is kind of similar. To have the best chance possible, you need to know all of the basics _cold_.  In order to be able to communicate intelligently about the problems, its helpful to be able to churn out the basics without thought.  That means all of the basic data structure manipulations, big O properties, and sorting algorithms known to the point of memorization (also understood).

**Basic Data Structures Operations**

```
                       Accessing    Searching    Inserting    Deleting
 -------------------------------------------------------------------------
             Array     O(1)         O(N)         O(N)         O(N)
       Linked List     O(N)         O(N)         O(1)         O(1)
Binary Search Tree     O(log N)     O(log N)     O(log N)     O(log N)
    Hash Table/Set     O(1)         O(N)         O(1)         O(1)
```



**LinkedLists**

A linear collection of data elements, whose order is not given by their physical placement in memory. Instead, each element points to the next. This structure allows for efficient insertion or removal of elements from any position in the sequence *during iteration*.

Variations:

- Singly Linked Lists: the most basic form. each node only contains a value and a pointer to next. potentially there could be a container for the whole thing with poppa operations like length.
- Doubly LinkedLists: nodes contain *prev* instead of just *next*. 



```typescript
class LinkedListIterative {
    head = null;
	length = 0;

	get( position ) {
        if ( position > this.length ) {
            throw new Error(`Position outside of list range: ${position}`);
        }
        
        let current = this.head;
        for( let i = 0; i < position; i++) {
            current = current.next;
        }
        return current;
    }

	add( position, value ) {
        let node = { next: null, value };
        if (position === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let prev = this.get( position - 1 );
            node.next = prev.next;
            prev.next = node;
        }
        this.length++;
	}
    
    remove( position ) {
        if ( ! this.head ) {
            throw new Error('Cannot remove elements from an empty list')
        }
        
        if ( position === 0) {
            this.head = this.head.next;
        } else {
            let prev = this.get( position - 1 );
            prev.next = prev.next.next;
        }
        
        this.length--;
    }
}

// more difficult to insert at positions?
class LinkedListRecursive {
    next = null;
    
    constructor( value ) {
        this.value = value;
    }
    
    add( value ) {
        if ( this.next ) {
            next.add( value );
        } else {
            this.next = new LinkedListRecursive( value );
        }
    }
    
    remove( value ) {
        if ( this.next === null ) {
            throw new Error(`Remove Error: Could not find ${ value }`)
        }
        
        if ( this.next.value === value ) {
            this.next = this.next.next;
        } else {
            this.next.remove( value );
        }
    }
    
    length() {
        if ( this.next === null ) {
            return 1;
        }
        
        return 1 + this.next.length();
    }
    
}
```

**Stacks and Queues**

```typescript
// FIFO
class Stack {
    top = null;
    pop() {
        if ( this.top ) {
            let item = top.value;
            top = top.next;
            return item;
        }
    }
    
    push( value ) {
        this.top = {value, next: this.top};
    }
}

// LIFO
class Queue {
    let first = null;
	let last = null;

    append( value ) {
        if ( ! this.first ) {
            this.first = this.last = { value };
            return;
        }
        this.last.next = { value };
        this.last = last.next;
    }

    shift() {
        if ( ! first ) {
            throw new Error(`Cannot call shift on an empty queue!`)
        }
        
        let value = first.value;
        first = first.next;
        return value;
    }
}
```



### Cracking the Coding Interview

##### Chapter 1: arrays and strings

1. Implement an algorithm to determine if a string has all unique characters. What if you can not use additional data structures?

   ```typescript
   // with data structure - O( n )
   function allUniq( str ) {
       const seen = new Set();
       for (const char of str) {
           if (seen.has(char)) {
               return false;
           }
           seen.add(char)
       }
       return true;
   }
   
   // without ds - O ( n ^2 )
   function allUniq( str ) {
       for ( let i = 0; i < str.length - 1; i++ ) {
           for ( let j = i + 1; j < str.length; j++ ) {
               if ( str[i] === str[j] ) {
                   return false;
               }
           }
       }
       return true;
   }
   ```

   

2. Write code to reverse a C-Style String. (C-String means that “abcd” is represented as five characters, including the null character.)

   ```typescript
   // mutate string in place.
   function reverse( str ) {
       for (let i = 0; i < (str.length)/2; i++) {
           swap( str, i, str.length-i-1-1);
       }
   }
   
   // mutation! swap the elements at position i and j within the array arr.
   function swap( arr, i, j ) {
       let temp = arr[i];
       arr[i] = arr[j];
       arr[j] = temp;
   }
   ```

   

3. Design an algorithm and write code to remove the duplicate characters in a string without using any additional buffer. NOTE: One or two additional variables are fine. An extra copy of the array is not. 
```typescript
   // assume c-style string again? remove means shift everything to the left?
   function dedupe( str ) {
       let tail = 1;
       for (let i = 1; i < str.length; i++ ) {
           let dupe = false;
           for (let j = 0; j < tail; j++ ) {
               if ( str[i] === str[j] ) {
                   console.error('DUPE', i,j)
                   dupe = true;
               }
           }
           if ( ! dupe ) {
               str [ tail ] = str[i];
               tail++;
           }
       }
       str[tail] = null;
       return str;
   }
```
3.1 FOLLOW UP: Write the test cases for this method. 

   ```typescript
   dedupe(null); // null
   dedupe([null]); // empty string
   dedupe(['a', null]); // single char string
   dedupe(['a','b','c','d']) // no dupes
   dedupe(['a', 'a', null]); // two char dupe string
   dedupe(['a', 'a', 'a', 'b', 'b', 'c', 'c', 'c', null]); // all contiguous dupes
   dedupe(['a','b','a','b']) // alternating dupes
   ```

   

4. Write a method to decide if two strings are anagrams or not.

```typescript
// sorting them should easily tell us if they have the same characters or not.
function isAnagram( str1, str2 ) {
    const sorted1 = Array.from( str1 ).sort();
    const sorted2 = Array.from( str2 ).sort();
    return sorted1 === sorted2;
}
```
5. Write a method to replace all spaces in a string with ‘%20’. 

```typescript
// using stdlib
function encodeSpaces( str ) {
  return str.replace(/ /g, '%20');
}
```

6. Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place? 

```typescript
// image is a 2D array
// e.g: 
//  1 2 3     7 4 1
//  4 5 6 --> 8 5 2
//  7 8 9     9 6 3
// -----------------

// I HATE THIS.. always been the hardest for me.
function rotate90( img ) {
    
}
```

1. Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column is set to 0. 

```typescript
function zeroRow( arr2d, row ) {
    if ( ! arr2d || ! row ) {
        throw new Error(`Must supply both a 2d array and a row`)
    }
    for ( let col = 0; col < arr2d[row].length; col++) {
        arr2d[row][col] = 0;
    }
}

function zeroCol( arr2d, col ) {
    if ( ! arr2d || ! col ) {
        throw new Error(`Must supply both a 2d array and a col`)
    }
    for ( let row = 0; row < arr2d.length; row++) {
        arr2d[row][col] = 0;
    }
}

function infectiousZero( arr2d ) {
    if ( ! Array.isArray(arr2d) ) {
        throw new Error(`Must supply an array to infectiousZero`)
    }
    const rows = [];
    const cols = [];
    for ( let row = 0; row < arr2d.length; row++) {
        for ( let col = 0; col < arr2d[row].length; col++ ) {
            if ( arr2d[row][col] === 0 ) {
                rows.push(row);
                cols.push(col);
            }
        }
    }
    rows.forEach( row => zeroRow(arr2d, row));
    cols.forEach( col => zeroCol(arr2d, col));
}
```



1. Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (i.e., “waterbottle” is a rotation of “erbottlewat”). 

```typescript
function isRotation(str1, str2) {
    if ( ! str1 || ! str2 || str1.length !== str2.length ) {
        return false;
    }
    
    return isSubstring( str1+str1, str2 )
}
```

##### Chapter 2: Linked Lists

1. Write code to remove duplicates from an unsorted linked list. 

   1. FOLLOW UP: How would you solve this problem if a temporary buffer is not allowed? 

   ```typescript
   // operator conditions
   // falsy args --> error
   // assumption: second will always be a set
   // falsy --> throw error
   
   // test cases
   // 1 -> 1
   // 1,1 -> 1
   // 1,2,3,1,2 -> 1,2,3
   // 1,2,3 -> 1,2,3
   function removeDupes(node, set = new Set()) {
       if (! node ) {
           throw new Error(`must provide head node as the first arg, but was given ${node}`)
       }
       
       if ( ! node.next ) {
           return;
       }
       
       set.add(node.value);
       while (node.next && set.has(node.next.value )) {
           node.next = node.next.next;
       }
       
       // short circuit if we ran out of nodes in the while loop.
       if ( ! node.next ) {
           return;
       }
       
       return removeDupes(node.next, set);
   }
   
   // FOLLOW-UP
   function removeNodesWithVal(node, val) {
       if ( ! node ) {
           return;
       }
       
       while (node.next) {
           if ( node.next.value === val) {
               node.next = node.next.next;
           } else {
               node = node.next;
           }
       }
   }
   
   function removeDupes(node) {
       while (node.next) {
           removeNodesWithVal(node, node.value);
           node = node.next;
       }
   }
   ```

   

2. Implement an algorithm to find the nth to last element of a singly linked list. 

```typescript
// arg checks:
// ------------
// falsy node --> error
// non-number n --> error, negative n --> error

// test cases
// -----------
// undefined, 2 --> throw
// [1,2,3], -1 --> throw
// [1,2,3], 0 --> 3
// [1,2,3], 1 --> 2
// [1,2,3], 2 --> 1
// [1,2,3], 3 --> error!
// [], 0 --> error

function nthToLast( node, n) {
    if ( ! node || ! Number.isFinite(n) || n < 0 ) {
        throw new Error(`invalid params provided`);
    }
    
    let current = node;
    let headstart = node;
    let i = 0;
    for (let i = 0; i < n; i++) {
        if (!headstart) {
            throw new Error(`list is not long enough to get the nth element: ${n}`)
        }
        headstart = headstart.next;      
    }
    
    while (headstart.next) {
        headstart = headstart.next;
        current = current.next;
    }
    return current;
}
```

1. Implement an algorithm to delete a node in the middle of a single linked list, given only access to that node. 

```typescript
/* test cases
 * -----------
 * falsy --> error
 * 1 --> ...? cannot be done?
 * 1,2 --> 2
 * 1,2,3 --> 2,3
 */
function deleteNode(node) {
    if ( ! node ) {
        throw new Error(`Must be given a linked list node as the first argument`);
    }
    
    if ( ! node.next ) {
        throw new Error(`Cannot remove the last node in the list`);
    }
    
    node.value = node.next.value;
    node.next = node.next.next;
}
```

1. You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the 1’s digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list. 

```typescript
const ZERO = { value: 0 };
function add(node1 = ZERO, node2 = ZERO, c = 0) {
    if ( ! node1 || ! node2 || ! node1.value || ! node2.value ) {
        throw new Error(`Must provide two linkedlist nodes`)
    }
    
    const value = (node1.value + node2.value + c) % 10;
    const carry = Math.floor((node1.value + node2.value + c) / 10);
    const next = (node1.next || node2.next) 
    	? add( node1.next, node2.next, carry)
        : null;
    
    return { value, next };
}
```

1. Given a circular linked list, implement an algorithm which returns node at the beginning of the loop. 

```typescript
/* Test Cases
 * ----------
 * 1,2,3,4,2.... --> 2
 * 1,1... --> 1
 */
function findBeginning( head ) {
    if ( ! head || ! head.value ) {
        throw new Error(`Must provide a linkedlist node, was given ${head}`);
    }
    if ( ! head.next ) {
        throw new Error(`There is no cycle in the linkedlist`);
    }
    let tortoise = head;
    let hare = head;
    while ( hare.next != null && hare.next.next !== null ) {
        tortoise = tortoise.next;
        hare = hare.next.next;
        if ( tortoise === hare) {
            break;
        }
    }
    
    if ( hare !== tortoise ) {
        throw new Error(`There is no cycle in this linkedlist`);
    }
    
    tortoise = head;
    while( hare !== tortoise ) {
        hare = hare.next;
        tortoise = tortoise.next;
    }
    console.error(tortoise, hare)
    return tortoise;
}
```

##### Chapter 3: Stacks and Queues