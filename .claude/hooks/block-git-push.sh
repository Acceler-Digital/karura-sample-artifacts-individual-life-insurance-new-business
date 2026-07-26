#!/usr/bin/env bash
# PreToolUse フック(Bash 用)
#
# 目的: パーミッションを全許可にした環境で、git push だけを確実にブロックする。
#
# permissions.deny の `Bash(git push *)` は先頭一致のため
# `git -C /path push` や `git --git-dir=... push` を取りこぼす。
# 本フックはコマンド文字列全体を見るため、それらも捕捉できる。
#
# 終了コード 2 = ツール実行をブロックし、stderr の内容を Claude に伝える。

set -uo pipefail

cmd="$(jq -r '.tool_input.command // empty')"
[ -z "$cmd" ] && exit 0

# `git` と `push` の間に任意のオプション/パスを許容する(ただし ; & | は跨がない)
if printf '%s' "$cmd" | grep -qE '(^|[;&|(]|[[:space:]])git[^;&|]*[[:space:]]push([[:space:]]|$)'; then
  echo "git push はこのプロジェクトのローカル設定でブロックされています。プッシュが必要な場合は、ユーザー本人に実行を依頼してください。" >&2
  exit 2
fi

exit 0
