super user open :  
 /var/lib/mongo/  
 mkdir /dump/webStore  
 paste DB  
mongorestore -d Northwind /var/lib/mongo/dump/Northwind 

cd /var/lib/mongo/dump
export:  
sudo mongodump -d webStore

zip -r GroceryStore.zip file1 folder1


have fun  
 