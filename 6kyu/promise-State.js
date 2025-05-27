// ❓Description:

// As you know, a promise is in one of these states: pending, fulfilled, rejected.

// Implement the async function getState that determines a state of a promise.

// const p = Promise.resolve();
// const state = await getState(p); // === "fulfilled"

// const p = Promise.reject();
// const state = await getState(p); // === "rejected"

// const p = new Promise(() => {});
// const state = await getState(p); // === "pending"

//Tests:


// ✅Solution:

const p2 = Promise.resolve();

// const p3 = Promise.reject()
// p3.catch(()=>{})

const p4 = new Promise(() => { })


const getState = async (promise) => {
    let promiseForCompare = Promise.resolve('pending')
    result = await Promise.race([promise.catch(()=>'rejected'), promiseForCompare.catch(()=>'rejected')])
    if (result === 'pending') result = 'pending'
    if (result === undefined) result = 'fulfilled'
    console.log(result);
    return result
}


console.log(getState(p4));

