import React from 'react'
import '../TabelPeminjaman/TabelPeminjaman.css'

const TabelPeminjaman = () => {
  return (
    <>
       <div className='tabel-field'>
            <div className='tabel-container'>
                <h2>Tabel Peminjaman dan Pengembalian Siswa</h2>
                
                <div className='tabel-peminjaman-pengembalian'>
                    <div className='tabel-peminjaman'>
                      <table className='tabel-component'>
                        <caption>Peminjaman</caption>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>ID Peminjaman</th>
                                <th>Tanggal Peminjaman</th>
                                <th>Nama Siswa</th>
                                <th>NIS</th>
                                <th>Kelas</th>
                                <th>Jumlah Pinjam</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className='tabel-pengembalian'>
                      <table className='tabel-component'>
                        <caption>Pengembalian</caption>
                        <thead>
                            <tr>
                            <th>No</th>
                                <th>ID Pengembalian</th>
                                <th>Tanggal Peminjaman</th>
                                <th>Nama Siswa</th>
                                <th>NIS</th>
                                <th>Kelas</th>
                                <th>Jumlah Pinjam</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                      </table>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default TabelPeminjaman