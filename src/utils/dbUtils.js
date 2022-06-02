


export const insertOne = async (payload) => {
  console.log(payload);
  try {
    const docRef = doc(db, 'users', payload.email);
    const res= await setDoc( docRef, payload);
    console.log(res);;
  } catch (error) {
    console.log(error);
  }
};


export const fetchUsers = async ()=>{
  const data = [];
let id = "";
const user=auth.currentUser;
const q = query(collection(db, "users"), where("email", "!=", user.email));
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  id = doc.id;
  data.push(doc.data());
});
console.log(data);
//setUsers([...data])
return { data };
}

export const fetchSnapUsers = async ()=>{
  const data = [];
  let unsubscribe;
let id = "";
const user=auth.currentUser;
console.log(user.email);
const q = query(collection(db, "users"), where("email", "!=", user.email));
const unsub=onSnapshot(q,(snapshot)=>{
    snapshot.docs.forEach(doc =>{
      data.push(doc.data())
    })
})
console.log(data);
return data
}
