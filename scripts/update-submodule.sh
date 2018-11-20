git submodule update
cd backend
git submodule init
git submodule update
git checkout develop
git pull
cd frontend
git checkout develop
cd ..
git add frontend
git commit -m "[dev] update frontend"
git push
git checkout pre-release
git pull
cd frontend
git checkout develop
cd ..
git add frontend
git commit -m "[dev] update frontend"
git push
cd ..
