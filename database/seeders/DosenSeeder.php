<?php

namespace Database\Seeders;

use App\Models\Dosen;
use Illuminate\Database\Seeder;

class DosenSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Dosen::Create([
            'name' => 'Dr. Muhammad, S.T., M.Sc',
            'prodi_id' => '4',
            'nip' => '196805252002121004',
            'nidn' => '0025056809',
            'profile_img' => 'dekanganteng.jpg'
        ]);

        Dosen::Create([
            'name' => 'Prof. Dr. Dahlan Abdullah, S.T., M.Kom',
            'prodi_id' => '9',
            'nip' => '197602282002121005',
            'nidn' => '0028027601',
            'profile_img' => 'profil_dahlan.jpg'
        ]);

        Dosen::Create([
            'name' => 'Rizky Putra Fhonna, S.T., M.Kom',
            'prodi_id' => '9',
            'nip' => '199111192019031012',
            'nidn' => '0019119105',
            'profile_img' => 'rizkykaprodi.png'
        ]);

        Dosen::Create([
            'name' => 'Sayed Fachrurrazi, S.Si., M.Kom',
            'prodi_id' => '9',
            'nip' => '197904232006041009',
            'nidn' => '0023047908',
            'profile_img' => 'sayed.png'
        ]);

        Dosen::Create([
            'name' => 'Mutammimul Ula, S.Kom., M.Cs',
            'prodi_id' => '9',
            'nip' => '198508282008121003',
            'nidn' => '0028088501',
            'profile_img' => 'pakmul.png'
        ]);

        Dosen::Create([
            'name' => 'Angga Pratama, S.Kom., M.Msi',
            'prodi_id' => '9',
            'nip' => '198809122015041003',
            'nidn' => '0012098805',
            'profile_img' => 'angga.png'
        ]);

        Dosen::Create([
            'name' => 'Ananda Faridhatul Ulva, S.Kom., M.Kom',
            'prodi_id' => '9',
            'nip' => '198806192019032020',
            'nidn' => '1319068803',
            'profile_img' => 'buknanda.png'
        ]);

        Dosen::Create([
            'name' => 'Mochamad Ari Saptari, S.Kom., M.Kom',
            'prodi_id' => '9',
            'nip' => '198001052008121001',
            'nidn' => '0005018005',
            'profile_img' => 'pakari.png'
        ]);

        Dosen::Create([
            'name' => 'Muthmainnah, S.Kom., M.Kom',
            'prodi_id' => '9',
            'nip' => '197711252006042007',
            'nidn' => '0025117704',
            'profile_img' => 'bukmai.png'
        ]);

        Dosen::Create([
            'name' => 'Desvina Yulisda, S.ST., M.S',
            'prodi_id' => '9',
            'nip' => '198912122019032020',
            'nidn' => '0012128908',
            'profile_img' => 'bukdes.png'
        ]);

        Dosen::Create([
            'name' => 'Rahma Fitria, M.Sc',
            'prodi_id' => '9',
            'nip' => '198706122020122008',
            'nidn' => '0012068709',
            'profile_img' => 'rahma.png'
        ]);

        Dosen::Create([
            'name' => 'Veri Ilhadi, S.T., M.Kom',
            'prodi_id' => '9',
            'nip' => '199111292022031012',
            'nidn' => '-',
            'profile_img' => 'pakveri.png'
        ]);

        Dosen::Create([
            'name' => 'Zalfie Ardian, S.Kom., M.Eng',
            'prodi_id' => '9',
            'nip' => '198612032022031002',
            'nidn' => '-',
            'profile_img' => 'zel.png'
        ]);

        Dosen::Create([
            'name' => 'Muhammad Ikhwani, S.Pd.I., M.Sc',
            'prodi_id' => '9',
            'nip' => '199011032022031005',
            'nidn' => '-',
            'profile_img' => 'ikhwan.png'
        ]);

        Dosen::Create([
            'name' => 'Ilham Sahputra, S.T., M.Cs',
            'prodi_id' => '9',
            'nip' => '198704192022031003',
            'nidn' => '8803033420',
            'profile_img' => 'pak ilham.png'
        ]);
    }
}
