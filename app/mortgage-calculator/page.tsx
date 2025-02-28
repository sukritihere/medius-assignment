"use client";

import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formatCurrency } from "@/lib/utils";

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [zipCode, setZipCode] = useState("95054");
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState({
    total: 0,
    principal: 0,
    propertyTax: 0,
    insurance: 0,
    hoa: 0,
  });

  useEffect(() => {
    const loanAmount = homePrice - downPayment;
    const monthlyInterest = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    const monthlyPrincipalAndInterest =
      (loanAmount *
        (monthlyInterest * Math.pow(1 + monthlyInterest, numberOfPayments))) /
      (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);

    const monthlyPropertyTax = (homePrice * 0.01) / 12;
    const monthlyInsurance = (homePrice * 0.0048) / 12;
    const monthlyHOA = 132;

    const totalMonthlyPayment =
      monthlyPrincipalAndInterest +
      monthlyPropertyTax +
      monthlyInsurance +
      monthlyHOA;

    setMonthlyPayment({
      total: totalMonthlyPayment,
      principal: monthlyPrincipalAndInterest,
      propertyTax: monthlyPropertyTax,
      insurance: monthlyInsurance,
      hoa: monthlyHOA,
    });
  }, [homePrice, downPayment, interestRate, loanTerm]);

  const handleDownPaymentChange = (value: number) => {
    setDownPayment(value);
    setDownPaymentPercent((value / homePrice) * 100);
  };

  const handleDownPaymentPercentChange = (value: number) => {
    setDownPaymentPercent(value);
    setDownPayment((homePrice * value) / 100);
  };

  return (
    <div className="min-h-screen bg-[#f8faf8] py-20">
      <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        <div className="w-full px-8 py-8 bg-[#f0f7f1]">
          <h1 className="text-5xl font-semibold text-gray-900 mb-4">
            Mortgage calculator
          </h1>
          <p className="text-gray-600 mb-8">
            Our mortgage calculator includes key factors like homeowners
            association fees, property taxes, and private mortgage insurance
            (PMI). Get the whole picture and calculate your total monthly
            payment.
          </p>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Home price
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500">$</span>
                <Input
                  type="number"
                  value={homePrice}
                  onChange={(e) => setHomePrice(Number(e.target.value))}
                  className="pl-7"
                />
              </div>
              <Slider
                value={[homePrice]}
                min={50000}
                max={1000000}
                step={1000}
                onValueChange={([value]) => setHomePrice(value)}
                className="mt-4"
              />
            </div>

            <div className="text-right mb-2">
              <div className="text-right mb-2">
                <div className="text-sm text-gray-600">Monthly payment</div>
                <div className="text-3xl font-bold text-gray-900">
                  {formatCurrency(monthlyPayment.total)}/mo
                </div>
              </div>
              <Button className="w-44 bg-emerald-700 hover:bg-emerald-800 ">
                Get pre-approved
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ZIP code
              </label>
              <Input
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Down payment
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <span className="absolute left-3 top-2 text-gray-500">$</span>
                  <Input
                    type="number"
                    value={downPayment}
                    onChange={(e) =>
                      handleDownPaymentChange(Number(e.target.value))
                    }
                    className="pl-7"
                  />
                </div>
                <Input
                  type="number"
                  value={downPaymentPercent.toFixed(0)}
                  onChange={(e) =>
                    handleDownPaymentPercentChange(Number(e.target.value))
                  }
                  className="w-20"
                />
                <span className="flex items-center text-gray-500">%</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Interest rate
              </label>
              <div className="relative">
                <Input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  step="0.125"
                />
                <span className="absolute right-3 top-2 text-gray-500">%</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Length of loan
              </label>
              <Select
                value={String(loanTerm)}
                onValueChange={(value) => setLoanTerm(Number(value))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select term" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30">30 years</SelectItem>
                  <SelectItem value="20">20 years</SelectItem>
                  <SelectItem value="15">15 years</SelectItem>
                  <SelectItem value="10">10 years</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Monthly payment breakdown
            </h2>

            <div className="text-3xl font-bold text-gray-900 mb-6">
              {formatCurrency(monthlyPayment.total)}/mo
            </div>

            <div className="relative h-4 bg-emerald-600 rounded-full mb-8 overflow-hidden">
              <div
                className="absolute h-full bg-purple-500"
                style={{
                  left: `${
                    (monthlyPayment.principal / monthlyPayment.total) * 100
                  }%`,
                  width: `${
                    (monthlyPayment.propertyTax / monthlyPayment.total) * 100
                  }%`,
                }}
              />
              <div
                className="absolute h-full bg-blue-500"
                style={{
                  left: `${
                    ((monthlyPayment.principal + monthlyPayment.propertyTax) /
                      monthlyPayment.total) *
                    100
                  }%`,
                  width: `${
                    (monthlyPayment.insurance / monthlyPayment.total) * 100
                  }%`,
                }}
              />
              <div
                className="absolute h-full bg-orange-500"
                style={{
                  left: `${
                    ((monthlyPayment.principal +
                      monthlyPayment.propertyTax +
                      monthlyPayment.insurance) /
                      monthlyPayment.total) *
                    100
                  }%`,
                  width: `${
                    (monthlyPayment.hoa / monthlyPayment.total) * 100
                  }%`,
                }}
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-600 mr-2" />
                  <span>Principal & interest</span>
                </div>
                <div className="font-medium">
                  {formatCurrency(monthlyPayment.principal)}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-2" />
                  <span>Property taxes</span>
                </div>
                <div className="font-medium">
                  {formatCurrency(monthlyPayment.propertyTax)}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-2" />
                  <span>Homeowners insurance</span>
                </div>
                <div className="font-medium">
                  {formatCurrency(monthlyPayment.insurance)}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mr-2" />
                  <span>HOA fees</span>
                </div>
                <div className="font-medium">
                  {formatCurrency(monthlyPayment.hoa)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">
          How is Better's mortgage calculator different?
        </h1>

        <h2 className="text-xl font-bold mb-4">
          This mortgage calculator shows your payments with taxes and insurance
        </h2>

        <p className="text-gray-700 mb-4">
          The property taxes you contribute are used to finance the services
          provided by your local government to the community. These services
          encompass schools, libraries, roads, parks, water treatment, police,
          and fire departments. Even after your mortgage has been fully paid,
          you will still need to pay property taxes. If you neglect your
          property taxes, you run the risk of losing your home to your local tax
          authority.
        </p>

        <p className="text-gray-700 mb-4">
          Your lender will usually require you to have homeowners insurance
          while you're settling your mortgage. This is a common practice among
          lenders because they understand that nobody wants to continue paying a
          mortgage on a home that's been damaged or destroyed.
        </p>

        <p className="text-gray-700 mb-6">
          Here's an interesting fact: Once you fully own your home, the choice
          to maintain homeowners insurance is entirely up to you. However, to
          ensure your home is protected against damages caused by fires,
          lightning strikes, and natural disasters that are common in your area,
          it is highly recommended to keep it. Therefore, always factor in these
          costs when using a Mortgage Calculator.
        </p>

        <h2 className="text-xl font-bold mb-4">
          This mortgage calculator shows your mortgage costs with PMI
        </h2>

        <p className="text-gray-700 mb-4">
          PMI, an abbreviation for private mortgage insurance, aids potential
          homeowners in qualifying for a mortgage without the necessity of a 20%
          down payment. By opting for a lower down payment and choosing a
          mortgage with PMI, you can purchase a home sooner, begin accruing
          equity, and keep cash available for future needs. This can all be
          calculated using this Mortgage Calculator.
        </p>

        <p className="text-gray-700 mb-4">
          Choosing a mortgage with PMI is a popular option:{" "}
          <a href="#" className="text-green-700 hover:underline">
            71% of first-time homebuyers
          </a>{" "}
          had a down payment of less than 20% in July 2021.{" "}
          <a href="#" className="text-green-700 hover:underline">
            In 2020, the median down payment for first-time homebuyers was just
            7%, and it hasn't risen above 10% since 1989
          </a>
          .
        </p>

        <p className="text-gray-700 mb-6">
          PMI is automatically removed from conventional mortgages once your
          home equity reaches 22%. Alternatively, you can request the removal of
          PMI once you've accumulated at least 20% home equity.
        </p>

        <h2 className="text-xl font-bold mb-4">
          This mortgage calculator includes HOA fees
        </h2>

        <p className="text-gray-700 mb-4">
          Homeowners association ("HOA") fees are typically charged directly by
          a homeowners association, but as HOA fees come part and parcel with
          condos, townhomes, and planned housing developments, they're an
          essential factor to consider when calculating your mortgage costs.
        </p>

        <p className="text-gray-700 mb-6">
          Homes that share structural elements, such as roofs and walls, or
          community amenities like landscaping, pools, or BBQ areas, often
          require homeowners to pay HOA fees for the maintenance of these shared
          features. It's important to factor in these costs during your budget
          planning stage, especially considering that HOA fees typically
          increase annually. HOAs may also charge additional fees known as
          'special assessments' to cover unexpected expenses from time to time.
        </p>

        <h2 className="text-3xl font-bold mb-6">
          How to reduce your monthly mortgage payments?
        </h2>

        <h2 className="text-3xl font-bold mb-6">
          How to use this mortgage calculator?
        </h2>

        <p className="text-gray-700 mb-4">
          Play around with different home prices, locations,{" "}
          <a href="#" className="text-green-700 hover:underline">
            down payments
          </a>
          , interest rates, and mortgage lengths to see how they impact your
          monthly mortgage payments.
        </p>

        <p className="text-gray-700 mb-6">
          Increasing your down payment and decreasing your interest rate and
          mortgage term length will make your monthly payment go down. Taxes,
          insurance, and HOA fees will vary by location. If you enter a down
          payment amount that's less than 20% of the home price,{" "}
          <a href="#" className="text-green-700 hover:underline">
            private mortgage insurance (PMI)
          </a>{" "}
          costs will be added to your monthly mortgage payment. As the costs of
          utilities can vary from county to county, we've included a utilities
          estimate that you can break down by service. If you're thinking about
          buying a condo or into a community with a Homeowners Association
          (HOA), you can add HOA fees.
        </p>

        <p className="text-gray-700 mb-4">
          The only amounts we haven't included are the money you'll need to save
          for annual home maintenance/repairs or the costs of home improvements.
          To see how much home you can afford including these costs, take a look
          at the{" "}
          <a href="#" className="text-green-700 hover:underline">
            Better home affordability calculator
          </a>
          .
        </p>

        <p className="text-gray-700 mb-6">
          Fun fact:{" "}
          <a href="#" className="text-green-700 hover:underline">
            Property tax rates
          </a>{" "}
          are extremely localized, so two homes of roughly the same size and
          quality on either side of a municipal border could have very different
          tax rates. Buying in an area with a lower property tax rate may make
          it easier for you to afford a higher-priced home.
        </p>

        <h2 className="text-xl font-bold mb-4">
          Do you know your property tax rate?
        </h2>

        <p className="text-gray-700 mb-4">
          While exact property tax rates vary by county, it can be helpful to
          look at taxes on the state level to get an idea for taxes in your
          state. Here's a helpful chart from{" "}
          <a href="#" className="text-green-700 hover:underline">
            Forbes
          </a>{" "}
          breaking down the Census Bureau's 2021 American Community Survey
          5-year estimate:
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-green-800 text-white">
                <th className="p-3 text-left">State</th>
                <th className="p-3 text-left">
                  Median Effective Property Tax Rate
                </th>
                <th className="p-3 text-left">
                  Mean Effective Property Tax Rate
                </th>
                <th className="p-3 text-left">Median Home Value</th>
                <th className="p-3 text-left">Median Property Taxes Paid</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100 border-b border-gray-200">
                <td className="p-3">AL</td>
                <td className="p-3">0.41%</td>
                <td className="p-3">0.40%</td>
                <td className="p-3">$157,100</td>
                <td className="p-3">$646</td>
              </tr>
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="p-3">AK</td>
                <td className="p-3">1.23%</td>
                <td className="p-3">1.04%</td>
                <td className="p-3">$282,800</td>
                <td className="p-3">$3,464</td>
              </tr>
              <tr className="bg-gray-100 border-b border-gray-200">
                <td className="p-3">AZ</td>
                <td className="p-3">0.62%</td>
                <td className="p-3">0.63%</td>
                <td className="p-3">$265,600</td>
                <td className="p-3">$1,648</td>
              </tr>
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="p-3">AR</td>
                <td className="p-3">0.62%</td>
                <td className="p-3">0.64%</td>
                <td className="p-3">$142,100</td>
                <td className="p-3">$878</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-bold mb-6">
          How is Better's mortgage calculator different?
        </h2>

        <h2 className="text-xl font-bold mb-4">
          This mortgage calculator shows your payments with taxes and insurance
        </h2>

        <h2 className="text-3xl font-bold mb-6">
          How to calculate monthly mortgage payments?
        </h2>

        <p className="text-gray-700 mb-4">
          Your monthly mortgage payment includes loan principal and interest,
          property taxes, homeowners insurance, and mortgage insurance (PMI), if
          applicable. While not typically included in your mortgage payment,
          homeowners also pay monthly utilities and sometimes pay homeowners
          association (HOA) fees, so it's a good idea to factor these into your
          monthly budget. This mortgage calculator factors in all these typical
          monthly costs so you can really crunch the numbers.
        </p>

        <h2 className="text-xl font-bold mb-4">
          Formula for calculating monthly mortgage payments
        </h2>

        <p className="text-gray-700 mb-6">
          The easiest way to calculate your mortgage payment is to use a
          calculator, but for the curious or mathematically inclined, here's the
          formula for calculating principal and interest yourself:
        </p>

        <div className="bg-gray-100 p-6 mb-6 text-center">
          <p className="mb-4">
            Monthly mortgage payments (M) = P ×{" "}
            <span className="inline-block">
              <div className="text-center">
                r(1+r)<sup>n</sup>
              </div>
              <div className="border-t border-gray-400"></div>
              <div className="text-center">
                (1+r)<sup>n</sup>-1
              </div>
            </span>
          </p>
        </div>

        <p className="mb-4">Where:</p>

        <ul className="list-disc pl-8 mb-6 space-y-4">
          <li>M is monthly mortgage payments</li>
          <li>P is the principal loan amount (the amount you borrow)</li>
          <li>
            r is the monthly interest rate
            <br />
            (annual interest rate divided by 12 and expressed as a decimal)
            <br />
            <div className="text-sm text-gray-600 mt-1">
              For example:
              <br />
              If the annual interest rate is 5%,
              <br />
              the monthly rate would be 0.05/12 = .00417, or .417%
            </div>
          </li>
          <li>
            n is the total number of payments in months
            <br />
            <div className="text-sm text-gray-600 mt-1">
              For example:
              <br />
              for a 30-year loan, n = 30×12 = 360 months
            </div>
          </li>
        </ul>

        <p className="mb-4">Here's a simple example:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-100 p-6">
            <p>P = $200,000</p>
            <p>r = 0.05/12 = 0.00417</p>
            <p>n = 30×12 = 360</p>
          </div>
          <div className="bg-gray-100 p-6">
            <p>
              0.00417 (1+0.00417)<sup>360</sup>
            </p>
            <p>
              M = 200,000 ×{" "}
              <span className="inline-block">
                <div className="text-center">
                  (1+0.00417)<sup>360</sup>-1
                </div>
              </span>
            </p>
            <p>M = $1,074 per month</p>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-12">
          The above scenario is for illustrative purposes only. Your actual
          monthly payment will differ.
        </p>

        <h2 className="text-3xl font-bold mb-6">
          How does a mortgage calculator help me?
        </h2>

        <p className="text-gray-700 mb-12">
          When deciding how much house you can afford, one of the most important
          pieces to determine is whether a home will fit into your monthly
          budget. A mortgage calculator helps you understand the monthly cost of
          a home. And ours will allow you to enter different down payments and
          interest rates to help determine what is affordable for you.
        </p>

        <hr className="border-gray-200 mb-12" />

        <h2 className="text-3xl font-bold mb-6">
          How much monthly mortgage payment can I afford?
        </h2>

        <p className="text-gray-700 mb-4">
          Lenders determine how much you can afford on a monthly housing payment
          by calculating your{" "}
          <a href="#" className="text-green-700 hover:underline">
            debt-to-income ratio (DTI)
          </a>
          . The maximum DTI you can have in order to qualify for most mortgage
          loans is often between 45-50%, with your anticipated housing costs
          included.
        </p>

        <p className="text-gray-700 mb-6">
          Your DTI is the balance between your income and your debt. It helps
          lenders understand how safe or risky it is for them to approve your
          loan. A DTI ratio represents how much of your gross monthly income is
          spoken for by creditors, and how much of it is left over to you as
          disposable income. It's most commonly written as a percentage. For
          example, if you pay half your monthly income in debt payments, you
          would have a DTI of 50%.
        </p>

        <p className="mb-4">
          Formula for calculating your debt-to-income (DTI) ratio:
        </p>

        <div className="bg-gray-100 p-6 mb-6 text-center">
          <div className="inline-block">
            <div className="text-center border-b border-gray-400 pb-2 mb-2">
              Monthly Debt Payments
            </div>
            <div className="text-center">Monthly Gross Income</div>
          </div>
          <span className="mx-4">×</span>
          <span>100</span>
          <span className="mx-4">=</span>
          <div className="inline-block text-left">
            <div>
              Debt-to-Income
              <br />
              Ratio
            </div>
          </div>
        </div>

        <p className="mb-4">
          Here's an example of what calculating your DTI might look like:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-100 p-6">
            <h3 className="font-bold mb-4">Debts</h3>
            <div className="flex justify-between mb-2">
              <span>Auto loan</span>
              <span>$350/month</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Student loans</span>
              <span>$220/month</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Credit cards</span>
              <span>$130/month</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>
                Expected
                <br />
                housing costs
              </span>
              <span>$1,800/month</span>
            </div>
            <div className="border-t border-gray-300 mt-4 pt-4 flex justify-between font-bold">
              <span>$2,500 monthly debt obligation</span>
            </div>
          </div>
          <div className="bg-gray-100 p-6">
            <h3 className="font-bold mb-4">Income</h3>
            <div className="flex justify-between mb-2">
              <span>
                Monthly salary
                <br />
                $60,000/12
              </span>
              <span>$5,000/month</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>
                Monthly side-gig
                <br />
                income
              </span>
              <span>$1,500/month</span>
            </div>
            <div className="border-t border-gray-300 mt-4 pt-4 flex justify-between font-bold">
              <span>$6,500 monthly income</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
