function CreateSecretHolder(secret) {
    this.secret = secret;
    this.setSecret = function(newSecret) {
        this.secret=newSecret
      };
    this.getSecret = function() {
      return( this.secret );
    };
  }
  
  let obj= new CreateSecretHolder(5)
  
obj.getSecret()
obj.setSecret(2)
obj.getSecret()

  /*Решите задачи на JS:

Создать функцию createSecretHolder(secret) которая принимает любое значение и возвращает объект ТОЛЬКО с двумя методами:

getSecret() - возвращает секрет
setSecret() - задает секрет
 
obj = createSecretHolder(5)
obj.getSecret() # returns 5
obj.setSecret(2)
obj.getSecret() # returns 2*/