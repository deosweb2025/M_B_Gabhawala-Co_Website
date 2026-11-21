import React, { useState } from "react";
import { Container } from "../common/Container";
import { Calculator, ArrowRight, RefreshCw } from "lucide-react";

export const InteractiveGstCalculator: React.FC = () => {
  const [amount, setAmount] = useState<number>(100000);
  const [taxRate, setTaxRate] = useState<number>(18);
  const [calcType, setCalcType] = useState<"exclusive" | "inclusive">("exclusive");
  const [supplyType, setSupplyType] = useState<"intra" | "inter">("intra");

  const rates = [5, 12, 18, 28];

  // Calculations
  let netAmount: number;
  let taxAmount: number;
  let totalAmount: number;

  if (calcType === "exclusive") {
    netAmount = amount || 0;
    taxAmount = (netAmount * taxRate) / 100;
    totalAmount = netAmount + taxAmount;
  } else {
    totalAmount = amount || 0;
    taxAmount = totalAmount - totalAmount / (1 + taxRate / 100);
    netAmount = totalAmount - taxAmount;
  }

  const cgst = supplyType === "intra" ? taxAmount / 2 : 0;
  const sgst = supplyType === "intra" ? taxAmount / 2 : 0;
  const igst = supplyType === "inter" ? taxAmount : 0;

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950 relative border-b border-white/10 overflow-hidden">
      {/* Glossy ambient background light glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/15 via-transparent to-transparent pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/10 border border-blue-400/30 border-t-white/30 text-blue-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] backdrop-blur-md">
              <Calculator className="w-3.5 h-3.5 text-sky-400" />
              <span>Interactive Client Utility</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              GST Quick Rate &{" "}
              <span className="glossy-accent-text">Tax Breakdown Calculator</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-200 max-w-xl mx-auto">
              Accurately model CGST, SGST, and IGST components for both tax-exclusive and tax-inclusive transaction values.
            </p>
          </div>

          {/* Calculator Card */}
          <div className="glossy-card rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            {/* Top Specular Sheen */}
            <div className="absolute -top-px left-12 right-12 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Controls (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                {/* Transaction Amount */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Transaction Amount (₹ INR)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300 font-bold text-lg">
                      ₹
                    </span>
                    <input
                      type="number"
                      min="0"
                      step="1000"
                      value={amount || ""}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="w-full pl-9 pr-4 py-3 bg-slate-900/80 border border-white/15 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 rounded-xl text-white font-mono text-lg shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] transition-all"
                      placeholder="Enter amount"
                    />
                  </div>
                </div>

                {/* Calculation Mode */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Calculation Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setCalcType("exclusive")}
                      className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                        calcType === "exclusive"
                          ? "btn-glossy-primary text-white shadow-md shadow-blue-600/35"
                          : "bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 border border-white/10"
                      }`}
                    >
                      GST Exclusive (Add Tax)
                    </button>
                    <button
                      type="button"
                      onClick={() => setCalcType("inclusive")}
                      className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                        calcType === "inclusive"
                          ? "btn-glossy-primary text-white shadow-md shadow-blue-600/35"
                          : "bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 border border-white/10"
                      }`}
                    >
                      GST Inclusive (Extract Tax)
                    </button>
                  </div>
                </div>

                {/* GST Rate Selection */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Applicable GST Slab
                  </label>
                  <div className="grid grid-cols-4 gap-2.5">
                    {rates.map((rate) => (
                      <button
                        key={rate}
                        type="button"
                        onClick={() => setTaxRate(rate)}
                        className={`py-2.5 rounded-lg text-sm font-bold font-mono transition-all ${
                          taxRate === rate
                            ? "bg-blue-500/20 border-2 border-blue-400 text-blue-300 shadow-[0_0_12px_rgba(96,165,250,0.3)]"
                            : "bg-white/[0.04] border border-white/10 text-slate-300 hover:border-white/25"
                        }`}
                      >
                        {rate}%
                      </button>
                    ))}
                  </div>
                </div>

                {/* Supply Nature (Intra-state vs Inter-state) */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Nature of Supply
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setSupplyType("intra")}
                      className={`py-2.5 px-3 rounded-lg text-xs font-medium transition-all ${
                        supplyType === "intra"
                          ? "bg-blue-600/30 text-blue-300 border border-blue-400/50 shadow-sm"
                          : "bg-white/[0.04] text-slate-400 border border-white/10"
                      }`}
                    >
                      Intra-State (CGST + SGST)
                    </button>
                    <button
                      type="button"
                      onClick={() => setSupplyType("inter")}
                      className={`py-2.5 px-3 rounded-lg text-xs font-medium transition-all ${
                        supplyType === "inter"
                          ? "bg-blue-600/30 text-blue-300 border border-blue-400/50 shadow-sm"
                          : "bg-white/[0.04] text-slate-400 border border-white/10"
                      }`}
                    >
                      Inter-State (IGST)
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Output Breakdown (5 cols) */}
              <div className="lg:col-span-5 bg-gradient-to-br from-white/[0.1] via-slate-900/80 to-blue-950/80 rounded-2xl p-6 border border-white/15 border-t-white/35 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                    <span className="text-xs uppercase font-bold text-blue-300 tracking-wider">
                      Tax Computation Summary
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setAmount(100000);
                        setTaxRate(18);
                      }}
                      className="text-slate-400 hover:text-white transition-colors"
                      title="Reset values"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="space-y-3.5 text-sm">
                    <div className="flex justify-between items-center text-slate-300">
                      <span>Net Taxable Base:</span>
                      <span className="font-mono font-semibold text-white">
                        ₹ {netAmount.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
                      </span>
                    </div>

                    {supplyType === "intra" ? (
                      <>
                        <div className="flex justify-between items-center text-slate-300 text-xs">
                          <span>CGST ({taxRate / 2}%):</span>
                          <span className="font-mono text-blue-300 font-semibold">
                            ₹ {cgst.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-slate-300 text-xs">
                          <span>SGST ({taxRate / 2}%):</span>
                          <span className="font-mono text-blue-300 font-semibold">
                            ₹ {sgst.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
                          </span>
                        </div>
                      </>
                    ) : (
                      <div className="flex justify-between items-center text-slate-300 text-xs">
                        <span>IGST ({taxRate}%):</span>
                        <span className="font-mono text-blue-300 font-semibold">
                          ₹ {igst.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
                        </span>
                      </div>
                    )}

                    <div className="flex justify-between items-center text-blue-300 font-semibold border-t border-white/10 pt-3">
                      <span>Total GST Liability:</span>
                      <span className="font-mono text-base font-bold text-white">
                        ₹ {taxAmount.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
                      </span>
                    </div>
                  </div>

                  {/* Grand Total */}
                  <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-blue-600/20 via-blue-500/15 to-indigo-600/20 border border-blue-400/30 border-t-white/30 text-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)]">
                    <span className="text-xs uppercase font-medium text-slate-300 block mb-1">
                      Gross Invoice Value
                    </span>
                    <span className="text-2xl sm:text-3xl font-extrabold glossy-gradient-text font-mono">
                      ₹ {totalAmount.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-center">
                  <p className="text-[11px] text-slate-300 mb-2">
                    Need customized classification or rate dispute resolution?
                  </p>
                  <a
                    href="tel:+919681606280"
                    className="inline-flex items-center gap-1.5 text-xs text-blue-300 hover:text-white font-semibold transition-colors"
                  >
                    <span>Speak with our GST Advisory Team</span>
                    <ArrowRight className="w-3 h-3 text-sky-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
