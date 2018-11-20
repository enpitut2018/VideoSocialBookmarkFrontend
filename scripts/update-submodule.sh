echo "start update-submodule"
echo $GH_TOKEN

git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"

git submodule update
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
git commit -m "[dev] update frontend"
git push origin-travis develop
git checkout pre-release
git pull
cd frontend
git checkout develop
cd ..
git add frontend
git commit -m "[dev] update frontend"
git push origin-travis pre-release

rm -rf frontend
cd ..
