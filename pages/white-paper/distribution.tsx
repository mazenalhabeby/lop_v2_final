import ContentContainer from "@/components/white-paper/ContentContainer"
import PageContainer from "@/components/white-paper/PageContainer"
import WhitePaperLayout from "@/layouts/WhitePaperLayout"
import useTranslation from "next-translate/useTranslation"
import Image from "next/image"

export default function Distribution() {
  const {t} = useTranslation("wdistribution")

  const tbHead = [
    {title: t("subhead1")},
    {title: t("subhead2")},
    {title: "%"},
    {title: t("subhead3")},
  ]

  const tbData = [
    {
      Allocation: t("subtitle1"),
      Tokens: "2,500,000,000",
      pecent: "25%",
      Period: t("subtitle2"),
    },
    {
      Allocation: t("subtitle3"),
      Tokens: "100,000,000",
      pecent: "1%",
      Period: t("subtitle4"),
    },
    {
      Allocation: t("subtitle5"),
      Tokens: "1,500,000,000",
      pecent: "15%",
      Period: t("subtitle6"),
    },
    {
      Allocation: t("subtitle7"),
      Tokens: "1,000,000,000",
      pecent: "10%",
      Period: t("subtitle8"),
    },
    {
      Allocation: t("subtitle9"),
      Tokens: "2,000,000,000",
      pecent: "20%",
      Period: t("subtitle10"),
    },
    {
      Allocation: t("subtitle11"),
      Tokens: "200,000,000",
      pecent: "2%",
      Period: t("subtitle12"),
    },
    {
      Allocation: t("subtitle13"),
      Tokens: "500,000,000",
      pecent: "5%",
      Period: t("subtitle14"),
    },
    {
      Allocation: t("subtitle15"),
      Tokens: "800,000,000",
      pecent: "8%",
      Period: t("subtitle16"),
    },
    {
      Allocation: t("subtitle17"),
      Tokens: "500,000,000",
      pecent: "5%",
      Period: t("subtitle18"),
    },
    {
      Allocation: t("subtitle19"),
      Tokens: "400,000,000",
      pecent: "4%",
      Period: t("subtitle20"),
    },
    {
      Allocation: t("subtitle21"),
      Tokens: "100,000,000",
      pecent: "1%",
      Period: t("subtitle22"),
    },
    {
      Allocation: t("subtitle23"),
      Tokens: "400,000,000",
      pecent: "4%",
      Period: t("subtitle24"),
    },
  ]

  const details = [
    {title: t("subhead4"), sub: "LOP"},
    {title: t("subhead5"), sub: "BSC"},
    {title: t("subhead6"), sub: "BEP20"},
    {title: t("subhead7"), sub: "10,000,000,000"},
  ]

  return (
    <PageContainer pageTitle={t("pageTitle")}>
      <ContentContainer title={t("title")}>
        <p className="text-center leading-loose tracking-wider">{t("Prag")}</p>
        <div className="flex flex-col-reverse lg:flex-row justify-around w-full">
          <div>
            <table className="table-auto w-full border-collapse border border-slate-600">
              <thead>
                <tr>
                  {tbHead.map((item, i) => {
                    return (
                      <th
                        key={i}
                        className="border border-slate-600 py-2 bg-amber-600">
                        {item.title}
                      </th>
                    )
                  })}
                </tr>
              </thead>
              <tbody>
                {tbData.map((item, i) => {
                  return (
                    <tr key={i} className="text-center">
                      <td className="border border-slate-600 p-2">
                        {item.Allocation}
                      </td>
                      <td className="border border-slate-600 p-2">
                        {item.Tokens}
                      </td>
                      <td className="border border-slate-600 p-2">
                        {item.pecent}
                      </td>
                      <td className="border border-slate-600 p-2 text-xs">
                        {item.Period}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col items-center justify-center gap-12">
            <div className="flex felx-row gap-4">
              {details.map((item, i) => {
                return (
                  <div key={i} className="text-center">
                    <h3 className=" font-aclonica text-amber-500">
                      {item.title}
                    </h3>
                    <span>{item.sub}</span>
                  </div>
                )
              })}
            </div>
            <Image
              src="/images/chartfinal.png"
              alt="Token Distribution"
              width={390}
              height={280}
              priority
            />
          </div>
        </div>
      </ContentContainer>
    </PageContainer>
  )
}

Distribution.getLayout = WhitePaperLayout
