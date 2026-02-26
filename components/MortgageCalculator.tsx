"use client";

import React, { useState, useEffect } from "react";
import { DollarSign, Percent, Calendar, PieChart } from "lucide-react";

const MortgageCalculator = () => {
    const [loanAmount, setLoanAmount] = useState(1000000);
    const [interestRate, setInterestRate] = useState(4.5);
    const [loanTerm, setLoanTerm] = useState(30);
    const [monthlyPayment, setMonthlyPayment] = useState(0);

    useEffect(() => {
        const principal = loanAmount;
        const calculatedInterest = interestRate / 100 / 12;
        const calculatedPayments = loanTerm * 12;

        const x = Math.pow(1 + calculatedInterest, calculatedPayments);
        const monthly = (principal * x * calculatedInterest) / (x - 1);

        if (isFinite(monthly)) {
            setMonthlyPayment(monthly);
        }
    }, [loanAmount, interestRate, loanTerm]);

    return (
        <div className="glass p-8 rounded-sm shadow-xl border-gold/20">
            <div className="flex items-center space-x-3 mb-8">
                <div className="p-2 bg-gold/20 rounded-sm text-gold">
                    <PieChart size={24} />
                </div>
                <h3 className="text-xl font-serif text-white">Mortgage Calculator</h3>
            </div>

            <div className="space-y-6">
                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/60 block">Loan Amount ($)</label>
                    <div className="relative">
                        <DollarSign className="absolute left-3 top-3 text-gold/50" size={16} />
                        <input
                            type="number"
                            value={loanAmount}
                            onChange={(e) => setLoanAmount(Number(e.target.value))}
                            className="w-full bg-white/5 border border-white/10 text-soft-white p-3 pl-10 rounded-sm focus:outline-none focus:border-gold transition-colors text-sm"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/60 block">Interest Rate (%)</label>
                    <div className="relative">
                        <Percent className="absolute left-3 top-3 text-gold/50" size={16} />
                        <input
                            type="number"
                            step="0.1"
                            value={interestRate}
                            onChange={(e) => setInterestRate(Number(e.target.value))}
                            className="w-full bg-white/5 border border-white/10 text-soft-white p-3 pl-10 rounded-sm focus:outline-none focus:border-gold transition-colors text-sm"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/60 block">Loan Term (Years)</label>
                    <div className="relative">
                        <Calendar className="absolute left-3 top-3 text-gold/50" size={16} />
                        <select
                            value={loanTerm}
                            onChange={(e) => setLoanTerm(Number(e.target.value))}
                            className="w-full bg-white/5 border border-white/10 text-soft-white p-3 pl-10 rounded-sm focus:outline-none focus:border-gold transition-colors text-sm"
                        >
                            <option value={10}>10 Years</option>
                            <option value={15}>15 Years</option>
                            <option value={20}>20 Years</option>
                            <option value={30}>30 Years</option>
                        </select>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col items-center">
                    <span className="text-[10px] uppercase tracking-widest text-gold mb-2 block">Estimated Monthly Payment</span>
                    <span className="text-4xl font-serif text-white">${monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                    <p className="text-[10px] text-white/40 mt-4 text-center leading-relaxed italic">
                        * This is an estimate for informational purposes only. Taxes and insurance are not included.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MortgageCalculator;
