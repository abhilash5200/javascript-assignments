//class- can create new user defined dataypes

  //create 100 person objects
  //create person datatype

  class Person{
    //properties
    pid;
    #age;
    static collegeName;

    static{
        Person.collegeName='anuarg'
    }
    //constructor
    constructor(pid,age){
        this.pid=pid;
        this.#age=age;
    }
    //methods
    //#for private property
    getPersonData(){
        console.log(this.pid,this.#age)


        
    }

  }
  //create object for person type
  let p1=new Person(100,21)
  let p2=new Person(100,21)
  
  p1.getPersonData();
  p2.getPersonData();



