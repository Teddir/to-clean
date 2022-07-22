
function delay(t, v) {
  return new Promise(function(resolve) { 
    setTimeout(resolve.bind(null, v), t)
  });
}

export default function resizeImage(triesRemaining, storageRef) {
  if (triesRemaining < 0) {
    return Promise.reject('out of tries');
  }

  return storageRef.getDownloadURL().then((url) => {
    return url;
  }).catch((error) => {
    switch (error.code) {
      case 'storage/object-not-found':
        console.log('process get resize image');
        return delay(2000).then(() => {
          return resizeImage(triesRemaining - 1, storageRef)
        });
      default:
        console.log(error.message);
        return Promise.reject(error);
    }
  })
}