export function pluralize(name, count) {
  if (count === 1) {
    return name;
  }
  return name + 's';
}

export function idbPromise(storeName, method, object) {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open('encanto-flowers', 1);
    let db, tx, store;
    request.onupgradeneeded = function (e) {
      const db = request.result;
      db.createObjectStore('products', { keyPath: '_id' });
      db.createObjectStore('categories', { keyPath: '_id' });
      db.createObjectStore('cart', { keyPath: '_id', });
      db.createObjectStore('total', { autoIncrement: true });
    };

    request.onerror = function (e) {
      console.log('There was an error');
    };

    request.onsuccess = function (e) {
      db = request.result;
      tx = db.transaction(storeName, 'readwrite');
      store = tx.objectStore(storeName);

      db.onerror = function (e) {
        console.log('error', e);
      };

      switch (method) {
        case 'put':
          store.put(object);
          resolve(object);
          break;
        case 'get':
          const all = store.getAll();
          all.onsuccess = function () {
            resolve(all.result);
          };
          break;
        case 'delete':
          store.delete(object._id);
          break;
        default:
          console.log('No valid method');
          break;
      }

      tx.oncomplete = function () {
        db.close();
      };
    };
  });
}

function randomPassword() {
  let chars = "qwertyuioplkjhgfdsazxcvbnm0123456789QWERTYUIOPLKJHGFDSAZXCVBNM!";
  let passwordLength = 12;
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1)
  }
  return password
}

function randomUsername() {
  let chars = "1234567890";
  let string = "";

  for (let i = 0; i < 6; i++) {
    string += chars[Math.floor(Math.random() * chars.length)];
  }
  return ("Guest" + string)
}

export function createRandomUser() {
  let guestUserName = randomUsername()
  let guestPassword = randomPassword()
  let guestEmail = guestUserName + "@encantoguest.com"

  return {
    userName: guestUserName,
    email: guestEmail,
    password: guestPassword
  }
}