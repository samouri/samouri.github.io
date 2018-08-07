
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

// more difficult to insert at positions.
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

**Standard List (Array)**

```typescript
class Array {
    data = [];
	length = 0;
    add() {
        
    }
}
```



### Cracking the Coding Interview

##### Chapter 1

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
       for (let i = 0; i < str.length; i++ ) {
           for (let j = i+1; j < str.length; j++ ) {
               
           }
       }
   }
   
   // unshift all the elements
   function remove(arr, position) {
       if ( position >= arr.length ) {
           throw new Exception(`position is out of bounds of array ${position}`)
       }
       for ( let i = position; i < arr.length-1; i++) {
           arr[i] = arr[i+1];
       }
       arr[ arr.length-1] = null; // shortens string by putting a new null in there!
   }
   ```

   

   1. FOLLOW UP: Write the test cases for this method. 

4. Write a method to decide if two strings are anagrams or not. 

5. Write a method to replace all spaces in a string with ‘%20’. 

6. Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place? 

7. Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column is set to 0. 

8. Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (i.e., “waterbottle” is a rotation of “erbottlewat”). 

9. 