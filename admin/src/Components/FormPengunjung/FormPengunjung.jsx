import React from 'react'
import '../FormPengunjung/FormPengunjung.css'

const FormPengunjung = () => {
  return (
    <>
        <div className='visitor-form-field'>
            <div className='visitor-form-container'>
                <h2>Pengunjung Perpustakaan</h2>
                
                <div className='visitor-form'>
                    <form action="" className='visitor-form-text'>
                        <p>Tanggal Berkunjung</p>
                        <div className='tanggal-form'>
                            <input type="text" placeholder='Jam'/>
                            <input type="text" placeholder='Hari'/>
                            <input type="text" placeholder='Tanggal'/>
                        </div>

                        <p>Nama Siswa</p>
                        <input type="text" placeholder='Masukkan Nama'/>

                        <div className='kelas-nis'>
                            <div>
                                <p>Kelas</p>
                                <input list='kelas' name="" id="" />
                                <datalist id='kelas'>
                                    <option value="X"></option>
                                    <option value="XI"></option>
                                    <option value="XII"></option>
                                </datalist>
                            </div>

                            <div>
                                <p>NIS</p>
                                <input type="text" placeholder='Nomor Induk Siswa'/>
                            </div>
                        </div>

                        <p>Kelas</p>
                        <input list='kelas' name="" id="" />
                            <datalist id='kelas'>
                                <option value="X"></option>
                                <option value="XI"></option>
                                <option value="XII"></option>
                            </datalist>

                        <p>Keperluan</p>
                        <input type="text" placeholder='Membaca, Meminjam'/>

                        <div className='visitor-form-btn'>
                            <button>Simpan</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default FormPengunjung