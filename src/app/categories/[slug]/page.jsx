import { notFound } from "next/navigation";
import CategoryHeader from "@/components/category-header";
import CategoryContent from "@/components/category-content";

// This would typically come from a CMS or API
const categories = {
  "ots-with-credit-clearance": {
    title: "OTS With Credit Clearance",
    description:
      "One Time Settlement (OTS) coupled with credit clearance presents a strategic approach for borrowers seeking to resolve their outstanding debts.",
    content: [
      {
        title: "Understanding OTS",
        description:
          "One Time Settlement (OTS) coupled with credit clearance presents a strategic approach for borrowers seeking to resolve their outstanding debts while simultaneously addressing their credit history and future creditworthiness. Companies negotiating with creditors to settle the debt for an agreed-upon amount, with the added benefit of having the borrower's credit report updated to reflect the settlement.",
        icon: "FileText",
      },
      {
        title: "Application Process",
        description:
          "Once the terms are finalized, the borrower makes the agreed-upon payment to the lender, either in a lump sum or through installments. With the completion of the payment, the lender issues a settlement letter and credit report to reflect the settled status of the debt.",
        icon: "ClipboardCheck",
      },
      {
        title: "Benefits",
        description:
          "OTS with credit clearance offers several benefits to loan borrowers and lenders, as borrowers are eligible to settle their debts while mitigating the negative impact on their credit history.",
        icon: "Star",
      },
    ],
    image: "/s6.jpg",
  },
  "one-time-settlement": {
    title: "One Time Settlement (OTS)",
    description:
      "One Time Settlement, often abbreviated as OTS, refers to a structured agreement between a borrower and a lender to settle an outstanding debt. In an OTS arrangement, the borrower agrees to make a one-time payment to the lender, which is usually less than the total outstanding amount. In return, the lender agrees to consider the debt as fully settled, thereby relieving the borrower of any further repayment obligations.",
    content: [
      {
        title: "Mechanics of One Time Settlement (OTS)",
        description:
          "The process of negotiating an OTS typically involves several steps. Firstly, the borrower initiates discussions with the lender expressing their inability to repay the entire debt. The lender then assesses the borrower's financial situation, including their income, assets, and liabilities, to determine the feasibility of an OTS. If both parties agree to pursue an OTS, they negotiate the terms and conditions of the settlement, including the amount to be paid, the mode of payment, and any additional clauses such as waiver of interest or penalties.",
        icon: "FileText",
      },
      {
        title: "Implications of One Time Settlement (OTS)",
        description:
          "For borrowers, OTS offers a lifeline by providing an opportunity to resolve their debts and regain financial stability. By negotiating a reduced settlement amount, borrowers can alleviate the burden of excessive debt and avoid the long-term consequences of defaulting on loans, such as damaged credit scores or legal actions. ",
        icon: "ClipboardCheck",
      },
      {
        title: "Strategies for Negotiating One Time Settlement (OTS)",
        description:
          "Effective negotiation is key to achieving a favorable OTS agreement for both borrowers and lenders. Borrowers should conduct a thorough assessment of their financial situation and prepare a realistic proposal outlining their repayment capabilities. Providing supporting documents such as income statements, asset declarations, and hardship letters can strengthen the borrower's case and increase the likelihood of a successful negotiation.",
        icon: "Star",
      },
    ],
    image: "/s7.jpg",
  },
  "structured-settlement": {
    title: "Structured Settlement",
    description:
      "A structured settlement is a financial arrangement in which an injured party receives compensation for damages or injuries through periodic payments over a specified period, rather than in a single lump sum. This form of settlement provides a stable income stream to the recipient, often designed to cover medical expenses, lost wages, and other damages resulting from a legal claim, such as personal injury or wrongful death.",
    content: [
      {
        title: "Understanding Structured Settlement",
        description:
          "The structure of a structured settlement is typically established through negotiations between the parties involved, including the plaintiff (the injured party) and the defendant (the party responsible for the injury or damages), or their respective legal representatives. These negotiations may take place during a legal proceeding or as part of a settlement agreement outside of court.",
        icon: "FileText",
      },
      {
        title: "Advantages to Recipient",
        description:
          "1. Stable Income: Rather than receiving a large sum of money all at once, which may be spent quickly or mismanaged, structured settlements provide a reliable income stream over time, helping to ensure ongoing financial security.\n\n 2. Tax Benefits: In many cases, the income generated from a structured settlement is tax-free or subject to favorable tax treatment, offering potential tax advantages compared to receiving a lump sum payment.\n\n 3. Customization: Structured settlements can be tailored to meet the specific needs and circumstances of the recipient, with flexibility in payment amounts, frequency, and duration.",
        icon: "ClipboardCheck",
      },
      {
        title: "Advantages to Payer",
        description:
          "1. Cost Management Structured settlements can help defendants or insurers manage the financial impact of a legal claim by spreading payments over time, rather than depleting resources with a single lump sum payment. \n\n 2. Finality Once a structured settlement is established and funded, the payer's obligation is fulfilled, providing closure to the legal matter and avoiding the risk of future financial liabilities. \n\n Overall, structured settlements serve as a valuable financial tool for providing long-term financial support to individuals who have suffered injuries or damages due to the negligence or wrongdoing of others. By offering stability, tax benefits, and customization options, structured settlements can help ensure that recipients receive fair compensation while promoting financial security and peace of mind.",
        icon: "Star",
      },
    ],
    image: "/15.jpg",
  },
  "structured-cleared-clearance": {
    title: "Structured Settlement With Cleared Clearance",
    description:
      "A structured settlement with cleared clearance refers to a financial arrangement where a claimant receives compensation for a legal claim or lawsuit through periodic payments rather than a lump sum. Cleared clearance implies that all necessary legal processes and approvals have been completed, ensuring that the settlement is final and legally binding. This structured approach offers several advantages for both the recipient and the payer.",
    content: [
      {
        title: "Understanding Structured Settlement with Cleared Clearance",
        description:
          "For the recipient, a structured settlement with cleared clearance provides financial security and stability over an extended period. Instead of receiving a large sum of money at once, which may be tempting to spend hastily or mismanage, the individual receives regular payments tailored to their needs. This can help cover ongoing medical expenses, living costs, education fees, or any other financial requirements. Additionally, these payments are often tax-free, further maximizing the overall value received.",
        icon: "FileText",
      },
      {
        title: "Customisation",
        description:
          "Furthermore, structured settlements can be customized to meet specific needs and circumstances. Payments can be scheduled to coincide with anticipated expenses, such as mortgage payments or tuition fees, ensuring that the recipient has the necessary funds when required. This predictability and flexibility make structured settlements an attractive option for individuals seeking long-term financial stability.",
        icon: "ClipboardCheck",
      },
      //   {
      //     title: "Advantages to Payer",
      //     description:
      //       "1. Cost Management Structured settlements can help defendants or insurers manage the financial impact of a legal claim by spreading payments over time, rather than depleting resources with a single lump sum payment. \n\n 2. Finality Once a structured settlement is established and funded, the payer's obligation is fulfilled, providing closure to the legal matter and avoiding the risk of future financial liabilities. \n\n Overall, structured settlements serve as a valuable financial tool for providing long-term financial support to individuals who have suffered injuries or damages due to the negligence or wrongdoing of others. By offering stability, tax benefits, and customization options, structured settlements can help ensure that recipients receive fair compensation while promoting financial security and peace of mind.",
      //     icon: "Star",
      //   },
    ],
    image: "/s3.jpg",
  },
  "moratorium-settlement": {
    title: "Moratorium Period Settlement",
    description:
      "A moratorium period settlement refers to a specific arrangement where a temporary suspension or delay is granted for the repayment of a financial obligation. This period, known as the moratorium, allows the debtor to temporarily halt payments or reduce them to a minimum level, typically due to financial hardship or extenuating circumstances. During this time, the debtor is often provided with relief from immediate repayment pressures, enabling them to stabilize their financial situation before resuming regular payments.",
    content: [
      {
        title: "Understanding Structured Settlement",
        description:
          "One common scenario where a moratorium period settlement may be implemented is in the case of loans or debts. For example, during times of economic downturn, natural disasters, or unforeseen personal hardships such as illness or job loss, individuals or businesses may struggle to meet their financial obligations. In such situations, lenders or creditors may offer a moratorium period settlement as a form of temporary relief. \n \n During the moratorium period, the debtor is usually not required to make regular payments or may only be required to make reduced payments, often covering interest only or a nominal amount. This temporary reprieve can provide much-needed breathing room for the debtor to reevaluate their financial situation, explore alternative income sources, or seek assistance from support programs or financial advisors.",
        icon: "FileText",
      },
      {
        title: "More Information",
        description:
          "Importantly, a moratorium period settlement is not forgiveness of the debt but rather a temporary suspension or adjustment of the repayment terms. The total amount owed remains unchanged, and the debtor is still responsible for fulfilling their obligations once the moratorium period ends. However, the temporary relief offered during the moratorium period can help prevent default, foreclosure, or bankruptcy, which may have serious long-term consequences for both the debtor and the creditor.",
        icon: "ClipboardCheck",
      },
      //   {
      //     title: "Advantages to Payer",
      //     description:
      //       "1. Cost Management Structured settlements can help defendants or insurers manage the financial impact of a legal claim by spreading payments over time, rather than depleting resources with a single lump sum payment. \n\n 2. Finality Once a structured settlement is established and funded, the payer's obligation is fulfilled, providing closure to the legal matter and avoiding the risk of future financial liabilities. \n\n Overall, structured settlements serve as a valuable financial tool for providing long-term financial support to individuals who have suffered injuries or damages due to the negligence or wrongdoing of others. By offering stability, tax benefits, and customization options, structured settlements can help ensure that recipients receive fair compensation while promoting financial security and peace of mind.",
      //     icon: "Star",
      //   },
    ],
    image: "/s4.jpg",
  },
  "reversed-dues-settlement": {
    title: "Reversed Dues Settlement",
    description:
      "A Reversed Dues Settlement is a financial arrangement designed to resolve outstanding debts or dues in a structured manner, often through negotiation between creditors and debtors. Unlike traditional debt repayment plans, where debtors make regular payments towards their outstanding balances, a reversed dues settlement involves a unique approach where the debtor receives payments from the creditor to settle the debt.",
    content: [
      {
        title: "Understanding Reversed Dues Settlement",
        description:
          "In a typical scenario, a debtor may find themselves unable to fulfill their financial obligations due to various reasons such as financial hardship, unexpected expenses, or changes in income. When faced with delinquent accounts or mounting debts, creditors may explore alternative solutions to recover at least a portion of the owed amount while mitigating losses. \n \n A reversed dues settlement involves a negotiation process where the debtor presents their financial situation to the creditor, demonstrating an inability to make conventional payments towards the outstanding debt. In some cases, the debtor may propose an alternative arrangement wherein the creditor agrees to pay a portion of the owed amount to the debtor instead.",
        icon: "FileText",
      },
      {
        title: "For Debtors",
        description:
          "On the other hand, for debtors, a reversed dues settlement offers relief from the burden of immediate repayment and provides an opportunity to address pressing financial needs. By receiving funds from the creditor, the debtor can potentially alleviate some financial strain, meet essential expenses, or even reduce other outstanding debts.",
        icon: "ClipboardCheck",
      },
      {
        title: "More Information",
        description:
          "It's important to note that reversed dues settlements typically involve a negotiated agreement between both parties, outlining the terms and conditions of the arrangement. These agreements may specify the amount to be paid by the creditor, the timeline for payments, any associated interest or fees, and the discharge of the debt upon completion of the settlement. \n \n Additionally, reversed dues settlements may have implications for the creditor's accounting practices and financial reporting, as they involve payments in the opposite direction of traditional debt repayment. Both parties must carefully consider the legal and financial ramifications of such arrangements before reaching a final agreement.",
        icon: "Star",
      },
    ],
    image: "/s15.jpg",
  },
  "statute-barred-settlement": {
    title: "Statute Barred Settlement",
    description:
      "A Statute Barred Settlement refers to a resolution of a debt that has become unenforceable due to the expiration of the statutory limitation period. In legal terms, a debt becomes statute-barred when the creditor has not pursued legal action or obtained a court judgment to enforce repayment within the timeframe prescribed by law. Once a debt is statute-barred, the creditor loses the legal right to enforce collection through the court system. However, it's important to note that the debt still exists, but the creditor's ability to take legal action to recover it is restricted.",
    content: [
      {
        title: "Understanding Statute Barred Settlement",
        description:
          "When a debt becomes statute barred, it does not mean that the debtor is absolved of their obligation to repay it. Instead, it signifies that the creditor's legal recourse to enforce repayment is limited. In such cases, both creditors and debtors may explore the possibility of reaching a settlement agreement to resolve the outstanding debt, even though the creditor's ability to pursue legal action is restricted. \n \n A statute barred settlement typically involves negotiations between the creditor and the debtor to agree on terms for repayment or discharge of the debt. These negotiations may take into account various factors, including the amount owed, the debtor's financial circumstances, and any extenuating circumstances that led to the debt becoming statute barred.",
        icon: "FileText",
      },
      {
        title: "For Creditors",
        description:
          "For creditors, settling a statute barred debt may represent an opportunity to recover at least a portion of the owed amount without resorting to legal action, which may be costly and time-consuming. By negotiating a settlement with the debtor, the creditor can potentially recoup some of the outstanding balance and close the account, thus avoiding further administrative burdens associated with pursuing unenforceable debts.",
        icon: "ClipboardCheck",
      },
      {
        title: "More Information",
        description:
          "On the other hand, for debtors, a statute barred settlement offers an opportunity to resolve an old debt that may have been hanging over their heads for an extended period. By reaching an agreement with the creditor, debtors can potentially settle the debt for a reduced amount or on favorable terms, providing relief from the financial burden and enabling them to move forward with a clean slate. \n \n It's important for both parties to approach statute barred settlements with caution and diligence. Debtors should verify the statute barred status of the debt and understand their rights and obligations before entering into any settlement agreement. Likewise, creditors should assess the risks and benefits of settling a statute barred debt and ensure that any settlement reached is legally binding and enforceable within the limitations of the law.",
        icon: "Star",
      },
    ],
    image: "/s11.jpg",
  },
  "prepayment-settlement": {
    title: "Prepayment Settlement",
    description:
      "A prepayment settlement is a financial arrangement where a borrower pays off a debt or loan before its scheduled maturity date. This type of settlement can occur in various financial contexts, including mortgages, auto loans, personal loans, and business financing agreements. Prepayment settlements offer benefits for both borrowers and lenders, albeit with potential implications for each party.",
    content: [
      {
        title: "Understanding Prepayment Settlement",
        description:
          "For borrowers, prepayment settlements provide an opportunity to reduce the overall cost of borrowing and gain financial flexibility. By paying off the debt early, borrowers can save on interest charges that would have accrued over the remaining term of the loan. This can result in significant savings, especially for long-term loans with high interest rates. Additionally, eliminating debt ahead of schedule can improve the borrower's financial standing and creditworthiness, potentially leading to better loan terms and future borrowing opportunities.\n \n Furthermore, prepayment settlements allow borrowers to free up cash flow by eliminating monthly loan payments. This extra liquidity can be redirected towards other financial goals, such as savings, investments, or discretionary spending. It can also serve as a buffer against unexpected expenses or economic downturns, providing a greater sense of financial security.",
        icon: "FileText",
      },
      {
        title: "For Lenders",
        description:
          "For lenders, prepayment settlements represent a potential loss of future interest income and may disrupt the expected cash flow from the loan. However, lenders can mitigate these risks by incorporating prepayment penalties or fees into the loan agreement. These penalties discourage borrowers from paying off the debt early or compensate the lender for the lost interest income. \n \n Despite the potential drawbacks for lenders, prepayment settlements can also benefit them in certain ways. For instance, lenders can use the funds received from prepayments to originate new loans, thereby generating additional revenue. Moreover, early repayment reduces the lender's exposure to default risk, as the borrower's obligation is fulfilled sooner than anticipated.",
        icon: "ClipboardCheck",
      },
      {
        title: "More Information",
        description:
          "It's essential for both borrowers and lenders to carefully consider the terms and implications of prepayment settlements before entering into such agreements. Borrowers should assess whether the savings from early repayment outweigh any prepayment penalties or fees. They should also ensure that they have sufficient funds to cover the prepayment amount without jeopardizing their financial stability.\n \n Similarly, lenders should evaluate the potential impact of prepayments on their portfolio and financial performance. They should establish clear prepayment terms and penalties to protect their interests while remaining competitive in the lending market. Additionally, lenders should communicate effectively with borrowers regarding prepayment options and associated costs to maintain transparency and trust.",
        icon: "Star",
      },
    ],
    image: "/7.jpg",
  },
  // Add more categories here
};

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const category = categories[slug];

  if (!category) {
    notFound();
  }
  return (
    <div>
      <CategoryHeader title={category.title} src={category?.image} />
      <CategoryContent
        description={category.description}
        content={category.content}
      />
    </div>
  );
}
