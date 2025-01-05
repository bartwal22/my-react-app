import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf'; 
import './PayoutCard.css';

function PayoutCard() {
  const [payoutRate, setPayoutRate] = useState(0);
  const [articlesCount, setArticlesCount] = useState(0);
  const [totalPayout, setTotalPayout] = useState(0);
  const [pendingPayout, setPendingPayout] = useState(0);
  const [lastPaid, setLastPaid] = useState(null);

  useEffect(() => {
    const savedPayoutRate = localStorage.getItem('payoutRate');
    const savedArticlesCount = localStorage.getItem('articlesCount');
    const savedLastPaid = localStorage.getItem('lastPaid');
    if (savedPayoutRate && savedArticlesCount !== null) {
      setPayoutRate(parseFloat(savedPayoutRate));
      setArticlesCount(parseInt(savedArticlesCount, 10));
    }
    if (savedLastPaid) {
      setLastPaid(savedLastPaid);
    }
  }, []);

  useEffect(() => {
    const total = articlesCount * payoutRate;
    const pending = total - (parseFloat(localStorage.getItem('lastPaidAmount')) || 0);
    setTotalPayout(total);
    setPendingPayout(pending);

    // Store updated data in local storage
    localStorage.setItem('payoutRate', payoutRate);
    localStorage.setItem('articlesCount', articlesCount);
  }, [payoutRate, articlesCount]);

  const handlePayOut = () => {
    localStorage.setItem('lastPaid', new Date().toLocaleDateString());
    localStorage.setItem('lastPaidAmount', totalPayout);
    setLastPaid(new Date().toLocaleDateString());
  };

  // Export payout data as PDF
  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text(`Total Payout: $${totalPayout.toFixed(2)}`, 20, 20);
    doc.text(`Pending Payout: $${pendingPayout.toFixed(2)}`, 20, 30);
    doc.text(`Last Paid: ${lastPaid || "Not Paid Yet"}`, 20, 40);
    doc.save('payout-report.pdf'); // Save as PDF
  };

  return (
    <div className="payout-card">
      <h3>Total Payout: ${totalPayout.toFixed(2)}</h3>
      <h4>Pending Payout: ${pendingPayout.toFixed(2)}</h4>
      <p>Last Paid: {lastPaid || "Not Paid Yet"}</p>
      
      <div>
        <h4>Set Payout Rate per Article/Blog:</h4>
        <input
          type="number"
          value={payoutRate}
          onChange={(e) => setPayoutRate(parseFloat(e.target.value))}
          placeholder="Payout Rate"
        />
      </div>

      <div>
        <h4>Set Total Articles/Blogs:</h4>
        <input
          type="number"
          value={articlesCount}
          onChange={(e) => setArticlesCount(parseInt(e.target.value, 10))}
          placeholder="Total Articles/Blogs"
        />
      </div>

      <button onClick={handlePayOut}>Mark as Paid</button>
      <button onClick={exportPDF}>Export as PDF</button>
    </div>
  );
}

export default PayoutCard;
