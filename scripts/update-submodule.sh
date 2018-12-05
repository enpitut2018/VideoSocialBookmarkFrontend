echo "start update-submodule"

head_commit_message=`git log -1 --pretty=%B`

git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"

git submodule update --init --recursive
cd backend
git remote add origin-travis https://${GH_TOKEN}@github.com/enpitut2018/VideoSocialBookmark.git

git submodule init
git submodule update
git checkout develop
git pull
cd frontend
git checkout develop
cd ..
git add frontend
git commit -m "update frontend: $head_commit_message"
git push origin-travis develop

rm -rf frontend
cd ..
