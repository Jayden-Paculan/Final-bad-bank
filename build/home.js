function Home(){ 
  const title = "Welcome to the bank";

  return (
    <Card
      bgcolor="primary"
      txtcolor="black"
      header="BadBank Landing Module"
      title={title}
      text="You can move around using the navigation bar."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}  
    />
  );  
  
}


