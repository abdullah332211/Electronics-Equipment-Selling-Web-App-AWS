const s3 = new AWS.S3();

async function uploadImage(fileBuffer, bucketName, fileName) {
  const params = {
    Bucket: bucketName,
    Key: fileName,
    Body: fileBuffer,
    ContentType: 'image/jpeg', // Adjust based on the file type
    ACL: 'public-read',
  };

  try {
    const data = await s3.upload(params).promise();
    return data.Location; // Returns the image URL
  } catch (err) {
    console.error('Error uploading image to S3:', err);
    throw new Error('Image upload failed');
  }
}
