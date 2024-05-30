import React from 'react'
import '../FormPeminjaman/FormPeminjaman.css'

const FormPeminjaman = () => {
  return (
    <>
        <div className='peminjaman-form-container'>
            <div className='peminjaman-form'>
                <h2>Data Peminjaman Siswa</h2>
                <form action="">
                    <p>Tanggal Peminjaman</p>
                    <input type="date" />

                    <p>Tanggal Pengembalian</p>
                    <input type="date" />

                    <p>Nama Siswa</p>
                    <input type="text" />

                    <p>NIS</p>
                    <input type="text" />

                    <p>Kelas</p>
                    <input type="text" />

                    <p>Jumlah Pinjaman</p>
                    <input type="text" />

                    <p>Sisa Buku Tersedia</p>
                    <input type="text" />

                    <div className='peminjaman-form-btn'>
                        <button>Tambah</button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default FormPeminjaman