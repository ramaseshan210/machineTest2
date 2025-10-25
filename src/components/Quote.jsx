// import { Input } from 'postcss';
import React from 'react';
import InputField from "../components/InputField"
import { AiOutlineUserAdd } from "react-icons/ai";
import { SlArrowDown } from "react-icons/sl";
import { RiDeleteBinLine } from "react-icons/ri";

const Quote = () => {
    return (
        <div className='flex  h-1000px] gap-20'>
            <section className='  m-20'>
                <div className='flex justify-between  '>
                    <div className='left flex flex-col gap-4'>
                        <div className='add_patiet flex flex-col  w-[180px] h-[150px] border border-white/25 justify-center items-center gap-4 '>
                            <div className='flex justify-center items-center rounded-full bg-[#01C0C842]'>
                                <AiOutlineUserAdd size={50} />
                            </div>
                            <div className='flex justify-center items-center text-[14px] extra-light-text'>
                                add a Patient
                            </div>
                        </div>
                        <div className='3_input_boxes flex w-[510px] gap-2 '>

                            <InputField type="text" placeholder="Search" />
                            <InputField type="text" placeholder="Location" />
                            <InputField type="text" placeholder="inventories" />
                        </div>
                        <div className='input_subject_linne flex w-[100px]'>
                            <InputField type="text" placeholder="input subject line" />
                        </div>
                    </div>
                    <div className='right'>
                        <InputField field="Quote No:" type="text" placeholder="placeholder" />
                        <InputField field="Date of Issue" type="text" placeholder="placeholder" />
                        <InputField field="Fee Level" type="text" placeholder="" />
                        <InputField field="Discount" type="text" placeholder="" />
                    </div>
                </div>

                <div className='table_header mt-10 border border-white/25'>


                    <div className='text-left p-2  flex justify-between w-full'>
                        <div className='flex justify-center items-center'>
                            <span className='flex justify-center items-center '>
                                <SlArrowDown size={10} />
                            </span>
                            <p className='pl-2 m-0 text-[14px]'>
                                CTCervical
                            </p>
                        </div>
                        <div className='flex justify-center items-center gap-2 text-[12px]'>
                            <p className='  font-light'>$0.00</p>
                            <span className='text-red-700'>
                                <RiDeleteBinLine  size={16}/>
                            </span>
                        </div>


                    </div>

                    <table className='min-w-full table-auto'>


                        <tr className='text-[14px] font-medium'>
                            <th className='text-left p-2 border border-white/25 '>Item Code</th>
                            <th className='text-left p-2 border border-white/25'>Description</th>
                            <th className='text-right p-2 border border-white/25'>Rebate Amount</th>
                            <th className='text-right p-2 border border-white/25'>Gap</th>
                            <th className='text-center p-2 border border-white/25'>Fee Level</th>
                            <th className='text-right p-2 border border-white/25'>Line Total</th>
                        </tr>
                        <tr className='text-[14px] font-light border border-white/25'>
                            <td className='text-left p-2 border border-white/25'>56224</td>
                            <td className='text-left p-2 border border-white/25'>CT Servical Spine with Contrast</td>
                            <td className='text-right p-2 border border-white/25'>$182.2</td>
                            <td className='text-right p-2 border border-white/25'>0.0</td>
                            <td className='text-center p-2 border border-white/25'>Veteran</td>
                            <td className='text-right p-2 border border-white/25'>$182.20</td>
                        </tr>
                        <tr className='text-[14px] font-light'>
                            <td className='text-left p-2 border border-white/25'>56001</td>
                            <td className='text-left p-2 border border-white/25'>CT Brain without Contrast</td>
                            <td className='text-right p-2 border border-white/25'>$215.81</td>
                            <td className='text-right p-2 border border-white/25'>100</td>
                            <td className='text-center p-2border border-white/25'>Veteran</td>
                            <td className='text-right p-2 border border-white/25'>$315.81</td>
                        </tr>
                    </table>
                </div>

                <div className='flex justify-between mt-10'>
                    <div className='left_terms and conditions mt-10 w-[40%] text-[10px]  flex flex-col gap-2 justify-center '>
                        <h4 className='text-[18px]'>Terms and Conditions</h4>
                        <p className='flex text-[10px] font-light   tracking-wide'>
                            simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,

                            when an unknown printer took a galley of type and scrambled it to make a type specimen

                            book. It has survived not only five centuries,
                            but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>

                    </div>
                    <div className='right_card_bill flex flex-col justify-end items-end gap-10'>
                        <div className='bill_cart border border-white/25 flex justify-center items-center p-2 rounded bg-[#01C0C81A] bg-opacity-[50%]'>
                            <table className='min-w-[280px] min-h-[110px]  table-auto  '>
                                <tr className='text-[14px] font-light'>
                                    <td className='text-left p-1'>Rebate Amount</td>
                                    <td className='text-left p-1'>$500</td>
                                </tr>
                                <tr className='text-[14px] font-light'>
                                    <td className='text-left p-1'>Gap Total</td>
                                    <td className='text-left p-1'>$500</td>
                                </tr>
                                <tr className='text-[14px] font-light'>
                                    <td className='text-left p-1'>Total Discount</td>
                                    <td className='text-left p-1'>0</td>
                                </tr>
                                <tr className='text-[14px] font-light'>
                                    <td className='text-left p-1 font-bold'>Net Total</td>
                                    <td className='text-left p-1 font-bold'>$500</td>
                                </tr>
                            </table>
                        </div>
                        <div>
                            <button className='bg-[#01C0C8] w-[80px] h-[34px] rounded-lg flex justify-center items-center'>
                                Save
                            </button>
                        </div>



                    </div>

                </div>

            </section>
        </div>
    );
}

export default Quote;
