{ pkgs ? import <nixpkgs> {} }:

let
  # Precisamos de bibliotecas que o binário do Prisma exige para rodar
  libPath = with pkgs; lib.makeLibraryPath [
    openssl
    stdenv.cc.cc
    zlib
  ];
in
pkgs.mkShell {
  packages = with pkgs; [
    nodejs_20
postgresql openssl
# O segredo: usamos o prisma-engines do Nix, mas vamos "enganar"
# o CLI para achar que ele é a versão 6.9.0

  ];

  shellHook = ''
    # 1. Aponta para os motores que o Nix instalou
    export PRISMA_SCHEMA_ENGINE_BINARY="${pkgs.prisma-engines}/bin/schema-engine"
    export PRISMA_QUERY_ENGINE_BINARY="${pkgs.prisma-engines}/bin/query-engine"
    export PRISMA_QUERY_ENGINE_LIBRARY="${pkgs.prisma-engines}/lib/libquery_engine.node"
    export PRISMA_FMT_BINARY="${pkgs.prisma-engines}/bin/prisma-fmt"
    
    # 2. Ignora a checagem de versão (Isso resolve o erro de RPC/Filters)
    export PRISMA_ENGINES_CHECKSUM_IGNORE_MISSING=1
    export PRISMA_SKIP_POSTINSTALL_GENERATE=1

    # 3. Garante que o Node consiga carregar as bibliotecas
    export LD_LIBRARY_PATH="${libPath}:$LD_LIBRARY_PATH"

    echo "Ambiente Nix + Prisma 6.9.0 configurado forçadamente."
  '';
}