# Instalação

## Instalação do Pacote Medialibrary

Para instalar o pacote medialibrary, você deve acessar a pasta root do seu projeto e executar o seguinte comando:

```bash
composer require "spatie/laravel-medialibrary:^11.0.0"
```

Isso irá instalar o pacote e suas dependências no seu projeto.

## Preparando o banco de dados

O pacote medialibrary utiliza uma tabela para armazenar as informações dos arquivos. A princípio, ela fica na pasta vendor, mas você pode publicar a tabela para a pasta de migrations do seu projeto. Para isso, execute o seguinte comando:

```bash
php artisan vendor:publish --provider="Spatie\MediaLibrary\MediaLibraryServiceProvider" --tag="migrations"
```

Após executar o comando, você deve rodar as migrations para criar a tabela no banco de dados. Para isso, execute o seguinte comando:

```bash
php artisan migrate
```

## Publicando o arquivo de configuração

A publicação do arquivo de configuração é opcional, mas é recomendada para que você possa customizar o pacote de acordo com as suas necessidades. Para publicar o arquivo de configuração, execute o seguinte comando:

```bash
php artisan vendor:publish --provider="Spatie\MediaLibrary\MediaLibraryServiceProvider" --tag="config"
```

Após executar o comando, o arquivo de configuração será publicado na pasta config do seu projeto.

## Adicionando um disco de mídia

Por padrão, o pacote medialibrary armazena os arquivos na pasta 'public'. No entanto, você pode configurar um disco de mídia para armazenar os arquivos em outro local. Para isso, você deve acessar o arquivo 'config/filesystems.php', este é um exemplo do padrão de configuração:

```php
'disks' => [
        ...

        'media' => [
            'driver' => 'local',
            'root'   => public_path('media'),
            'url'    => env('APP_URL').'/media',
        ],
],
```

Neste exemplo, o disco de mídia foi configurado para armazenar os arquivos na pasta 'public/media'. Você pode alterar o local de armazenamento de acordo com as suas necessidades.

Para guardar todos os arquivos de mídia nesse disco, por padrão, você deve adicionar a seguinte configuração no arquivo de configuração do pacote medialibrary:

```php
return [
    'disk_name' => 'media',
];
```

Com isso, todos os arquivos de mídia serão armazenados no disco 'media'.