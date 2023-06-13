import { Modal,Button } from "antd";
import React from "react";

const PrintBill = ({ isModalOpen, ModalOpen }) => {
  return (
    <Modal
      title="Çek Hesabati"
      open={isModalOpen}
      onCancel={() => ModalOpen(false)}
      footer={false}
      width={800}
    >
      <section className="py-20 bg-black">
        <div className="bg-white max-w-5xl mx-auto px-6 py-10">
          <div className="overflow-hidden">
            <div className="logo">
              <h2 className="text-4xl text-slate-800 font-medium">LOGO</h2>
            </div>
          </div>
          <div className="bill-detay">
            <div className="grid grid-cols-4 gap-10">
              <div className="text-xs text-slate-600">
                <p className="font-bold text-slate-700">Fatura Detayı:</p>
                <p>The Boring Company:</p>
                <p>Tesla Street 007:</p>
                <p>Frisco:</p>
                <p>CA 0000:</p>
              </div>
              <div className="text-xs text-slate-600">
                <p className="font-bold text-slate-700">Fatura:</p>
                <p>Fatura:</p>
                <p>Fake Street 123:</p>
                <p>San Javier:</p>
                <p>CA 1234:</p>
              </div>
              <div className="text-xs text-slate-600">
                <div>
                  <p className="font-bold text-slate-700">Fatura numarası:</p>
                  <p>00080</p>
                </div>
                <div>
                  <p className="font-bold text-slate-700">Date of Issue:</p>
                  <p>2022-11-21</p>
                </div>
              </div>
              <div className="text-xs text-slate-600">
                <div>
                  <p className="font-bold text-slate-700">Terms:</p>
                  <p>0 Days</p>
                </div>
                <div>
                  <p className="font-bold text-slate-700">Due:</p>
                  <p>00.00.00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-8">
            <table className="min-w-full ">
              <thead>
                <tr className="border-b-2 border-black">
                  <th
                    scope="col"
                    className="py-3 text-left text-slate-600 sm:table-cell hidden"
                  >
                    Görsel
                  </th>
                  <th
                    scope="col"
                    className="py-3 text-left text-slate-600 sm:table-cell hidden"
                  >
                    Başlık
                  </th>
                  <th
                    scope="col"
                    className="py-3 text-left text-slate-600 sm:table-cell hidden"
                  >
                    Qiymət
                  </th>
                  <th
                    scope="col"
                    className="py-3 text-left text-slate-600 sm:table-cell hidden"
                  >
                    Ədəd
                  </th>
                  <th
                    scope="col"
                    className="py-3 text-left text-slate-600 sm:table-cell hidden"
                  >
                    Toplam
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-2 mb-5">
                  <td className="py-4">
                    <img
                      src="https://imgrosetta.mynet.com.tr/file/15681377/15681377-728xauto.png"
                      alt=""
                      className="w-12 h-12 object-cover"
                    />
                  </td>
                  <td className="py-4">
                    <span>Lahmacun</span>
                  </td>
                  <td className="py-4">
                    <span>4 AZN</span>
                  </td>
                  <td className="py-4">
                    <span>1</span>
                  </td>
                  <td className="py-4">
                    <span>4 AZN</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col justify-end">
              <div className="flex justify-end p-3 gap-20">
                <strong>Məbləğ</strong>
                <span>100 AZN</span>
              </div>

              <div className="flex justify-end  p-3 gap-20">
                <strong>ƏDV 18%</strong>
                <span className="text-red-600">18 AZN</span>
              </div>

              <div className="flex justify-end p-3 gap-16">
                <strong className="text-lg text-green-600">
                  Toplam Məbləğ
                </strong>
                <span className="text-lg">118 AZN</span>
              </div>
          </div>
        </div>
        
      </section>
      <div className="flex my-5 justify-end">
        <Button type="primary" className='btn-pramire py-5 flex items-center justify-center' >Yazdir</Button>
      </div>
      
    </Modal>
  );
};
export default PrintBill;
