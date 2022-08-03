function Transactions() {
    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState(''); 
    const [balance, setBalance] = React.useState('');
    const [transactions, setTransactions] = React.useState('');

    

    return(<>
    <h5>Transaction History:</h5>
    <TransactionCard
        bgcolor="primary"
        header="Recent Transactions"
    />
    </>)
}